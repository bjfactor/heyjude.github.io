import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, FormControl, IconButton, Input, Spinner, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import { getSender, getSenderFull } from '../config/ChatLogic';
import ProfileModal from './Miscellaneous/ProfileModal';
import UpdateGroupChatModal from './UpdateGroupChatModal';
import axios from 'axios';
import ScrollableChat from '../components/ScrollableChat';
import "./styles.css";
import io from 'socket.io-client';

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const toast = useToast();

  const { user, selectedChat, setSelectedChat, notification, setNotification } = ChatState();

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config
      );

      // console.log(messages);
      setMessages(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages, refresh the page",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "/api/message",
          {
            content: newMessage,
            chatId: selectedChat,
          },
          config
        );

        // console.log(data);

        socket.emit("new message", data);
        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured.",
          description: "Failed to send message.",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    }
  };

  //Hook to start the socket.io
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  // This hook makes the chat realtime
  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
    // eslint-disable-next-line
  }, [selectedChat]);

  

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        if (!notification.includes(newMessageReceived)) {
          setNotification([newMessageReceived, ...notification]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages([...messages, newMessageReceived]);
      }
    });
  });

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  return (
     <>
      {selectedChat ? (
        <>
          <Text fontSize={{ base: "28px", md: "30px" }} pb={3} bg="#eaeaea" px={5} py={3} w={"100%"} fontWeight={"bold"} fontFamily={"Work sans"} display={"flex"} justifyContent={{ base: "space-between" }} alignItems="center">
            
          <IconButton display={{ base: "flex", md: "none" }} icon={<ArrowBackIcon />} onClick={() => setSelectedChat("")} />
          {messages && (!selectedChat.isGroupChat ? ( <> { getSender(user, selectedChat.users) }
          <ProfileModal user={getSenderFull(user, selectedChat.users)} />
        </>
            ) : (
                <>
                  {selectedChat.chatName.toUpperCase()}
                  <UpdateGroupChatModal fetchMessages={fetchMessages} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                </>
              ))}
          </Text>
          
          <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} bg={"#ededed"} py={"30px"} px={"50px"} w={"100%"} h={"100%"} overflowY={"hidden"}>
            
            {loading ? (
              <Spinner size={"2xl"} w={20} h={20} alignSelf={"center"} margin="auto" />
            ) : (
              <div className="messages">
                  <ScrollableChat messages={messages}/>
              </div>
            )}

            <FormControl onKeyDown={sendMessage} id="first-name" mt={3} isRequired >
              {istyping ? (
                <div>
                  <p style={{ color: "gray", paddingBottom: "10px"}}>{`${user.name} is typing...`}</p>
                </div>
              ) : (
                <></>
              )}
              
              <Input variant={"filled"} bg={"#FAF7F0"} py="5"  placeholder="Hey Jude! don't be afraid, start a conversation and make the world a better place..." value={newMessage} onChange={typingHandler} />
            </FormControl>
          
          </Box>
        </>
      ) : (
        // to get socket.io on same page
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} h={"100%"}>
          <Text fontSize={"3xl"} pb={3} fontFamily={"Work sans"}>
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  )
}

export default SingleChat