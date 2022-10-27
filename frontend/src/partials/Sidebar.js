import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Input, Spinner, Tooltip, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import ChatLoading from '../components/ChatLoading'
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { ChatState } from "../Context/ChatProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import UserListItem from '../components/userAvatar/UserListItem'
import GroupChatModal from '../components/Miscellaneous/GroupChatModal';


const Sidebar = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState();
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState(false);
    const { setSelectedChat, user, chats, setChats } = ChatState();
    const toast = useToast;
    const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = async (query) => {
    setSearch(query)
        if (!query) {
            return;
        }
        try { 
            setLoading(true)
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                }
            }
            const { data } = await axios.get(`/api/user?search=${search}`, config);
            setLoading(false);
            setSearchResult(data);
        } catch (err) {
            toast({
                title: "Error Occured",
                description: "Failed to load the search results",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            })
        }
  };

  const accessChat = async (userId) => {
    console.log(userId);
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      // API Request
      const { data } = await axios.post("/api/chat", { userId }, config);
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };


  return (
    <Box bg="#1b1b1b" h="100vh" w="100px" display={{lg: 'flex', md: 'none', base: 'none'}} justifyContent="center">
      <VStack spacing='20px' mt='3'>
        <IconButton colorScheme='black' mb="5" className='icon-button' variant='solid' size='lg' aria-label='Menu' icon={<HamburgerIcon />}></IconButton>
        
        <Tooltip label="Search contacts to chat" className='tooltip' hasArrow placement='end' ml={"2px"} p="2" bg='white' color='black'>
          <IconButton onClick={onOpen} colorScheme='black' className='icon-button' variant='solid' size='lg' backgroundColor="blackAlpha.500" aria-label='Search Contacts' icon={<Search2Icon />} />
        </Tooltip>
        
        <GroupChatModal> 
          <Tooltip label="Create group chat" className='tooltip' hasArrow placement='end' ml={"2px"} p="2" bg='white' color='black'>      
              <IconButton colorScheme='black' variant='solid' className='icon-button' size='lg' backgroundColor="blackAlpha.500" aria-label='Add Contacts' icon={<FontAwesomeIcon icon={faUserGroup} />} />
          </Tooltip>
        </GroupChatModal>
              
      </VStack>
      
      <Drawer placement="left" size={'sm'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg={'#fefefe'} pt="8">
            <Input placeholder="Search by name or email" borderColor={"gray.400"} mr={2} value={search} onChange={(e) => handleSearch(e.target.value)} />
          </DrawerHeader>
          
          <DrawerBody bg={'#fefefe'} pt="3">
            <VStack spacing={"10px"}>
            { loading ? (<ChatLoading />
            ) : (
                searchResult?.map((user) => (
                  <UserListItem key={user._id} user={user} handleFunction={() => accessChat(user._id)} />
                  
                ))
              )}
              { loadingChat && <Spinner ml={"auto"} display={"flex"} />}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Sidebar