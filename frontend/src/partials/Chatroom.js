import React from 'react';
import { ChatState } from '../Context/ChatProvider';
import { Box } from "@chakra-ui/layout";
import SingleChat from '../components/SingleChat';

const Chatroom = ({fetchAgain, setFetchAgain}) => {
    const { selectedChat } = ChatState();

    return (
        <Box display={{ base: selectedChat ? "flex" : "none", md: "flex" }} alignItems={"center"} flexDirection={"column"} bg={"#ededed"} width={{ base: "100%", md: "68" }} h={"100%"}>
    
            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    
        </Box>
    )
}

export default Chatroom