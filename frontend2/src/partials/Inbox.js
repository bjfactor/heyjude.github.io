import React, { useEffect, useState } from 'react'
import { Box, Stack, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { ChatState } from '../Context/ChatProvider';
import ChatLoading from '../components/ChatLoading';
import { getSender } from '../config/ChatLogic';

const Inbox = ({fetchAgain}) => {
    const [loggedUser, setLoggedUser] = useState();
    const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
    const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  }

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);
    
    return (
    <Box bg="#2e2e2e" h="100vh" w="350px" display={{ lg: 'flex', md: 'none', base: 'none' }} p="2" flexDirection="column">
        <Box>
            <Text fontSize={"24px"} fontWeight={"bold"} p={3} display={"flex"} textAlign={"start"} color={"white"}>
                Messages
            </Text>        
        </Box>
        <Box display={"flex"} flexDirection={"column"} p={3} width={"100%"} h="100%" overflowY={"hidden"}>
          {chats ? ( <Stack spacing={'4'}>
              {chats.map((chat) => (
                
                <Box onClick={() => setSelectedChat(chat)} h="80px" cursor="pointer" borderRadius={'md'} bg={selectedChat === chat ? "#057dcd" : "#E8E8E8"} color={selectedChat === chat ? "white" : "black"} px={3} py={3} key={chat._id}>
                  <Text fontSize="20px" fontWeight={"semibold"}>
                    {!chat.isGroupChat ? getSender(loggedUser, chat.users) : chat.chatName}
                  </Text>
                
                  {chat.latestMessage && (
                    <Text fontSize="14px" >
                      <span style={{marginRight: "2px"}}>{chat.latestMessage.sender.name} : </span>
                      {chat.latestMessage.content.length > 50
                        ? chat.latestMessage.content.substring(0, 51) + "..."
                        : chat.latestMessage.content}
                    </Text>
                  )}
                </Box>
              ))}
            </Stack>
          
          ) : (
            <ChatLoading />
          )}
      </Box>
      </Box>
  )
}

export default Inbox