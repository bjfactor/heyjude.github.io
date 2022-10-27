import { Box } from '@chakra-ui/react';
import { ChatState } from "../Context/ChatProvider";
// import SideDrawer from '../components/Miscellaneous/SideDrawer';
// import MyChats from '../components/MyChats';
// import ChatBox from '../components/ChatBox';
import { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Inbox from '../partials/Inbox';
import Navbar from '../partials/Navbar';
import Chatroom from '../partials/Chatroom';

const Chatpage = () => {
    const { user } = ChatState();
    const [fetchAgain, setFetchAgain] = useState(false);

    return (
        <Box display={"flex"} flexDirection={"row"} w={"100%"} justifyContent={"start"} height={"90vh"}>
            <Sidebar />
            {user && <Inbox fetchAgain={fetchAgain} />}
            <Box width="100%" height="auto">
                {user && <Navbar />}
                <Box height={"93vh"} mt={1} mx={1}>
                    {user && (<Chatroom fetchAgain={fetchAgain} setFetchAgain={ setFetchAgain} />)}
                </Box>                 
            </Box>
        </Box>
    );
};

export default Chatpage