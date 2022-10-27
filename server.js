require('dotenv').config();
const express = require('express');
const userRoutes = require("./backend/routes/userRoutes");
const chatRoutes = require("./backend/routes/chatRoutes");
const messageRoutes = require("./backend/routes/messageRoutes");
const {notFound, errorHandler} = require('./backend/middleware/errorMiddleware')

const connectDatabase = require('./backend/config/database');
const { application } = require('express');
const path = require("path")

const app = express();
connectDatabase();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("API IS RUNNING");
// });

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);

// app.get('/chat', (req, res) => {
//     res.send(chats)
// });



app.use(notFound);
app.use(errorHandler);

app.get('/api/chat/:id', (req,res) => {
    // console.log(req.params.id);
    const singlechat = chats.find(c => c._id === req.params.id);
    res.send(singlechat);
})

// Deployment

const __dirname2 = path.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname2, '/frontend/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname2, "frontend", "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("API is running successfully")
    })
}

// Deployment


const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));

const io = require('socket.io')(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000",
    }
});

io.on("connection", (socket) => {
    //verify if the socket connection is successful
    console.log('Successfully connected to socket.io')

    //creating a new socket where the frontend will send data
    socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit("connected");
    });

    //this created a particular room for the user
    socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
    });

    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

    socket.on("new message", (newMessageReceived) => {
        var chat = newMessageReceived.chat;

        if (!chat.users) return console.log('chat.users not defined');

        chat.users.forEach(user => {
            if (user._id == newMessageReceived.sender._id) return;

            socket.in(user._id).emit("message received", newMessageReceived);
        })
    });

    socket.off("setup", () => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
  });
})