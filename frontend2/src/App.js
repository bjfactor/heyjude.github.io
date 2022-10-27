import "./App.css"
// import { Routes, Route } from 'react-router-dom';
// import Homepage from "./pages/Homepage";
// import ChatPage from "./pages/ChatPage";
// import Home from "./partials/Home/Home"
// import Signin from "./Utilities/Signin";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./pages/ChatPage";
import Signin from "./Utilities/Signin";
import Register from "./Utilities/Register";
import Home from "./partials/Home/Home";
import Plans from "./partials/Plans/Plans";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} exact />
          <Route path="/signin" element={<Signin />} exact />
          <Route path="/signup" element={<Register />} exact />
          <Route path='/chats' element={<Chatpage />} exact />
          <Route path='/plans' element={<Plans />} exact />
      </Routes>
      </div>
  );
}

export default App;
