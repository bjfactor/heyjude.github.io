import React from 'react'
import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ChatState } from '../Context/ChatProvider';
import { useNavigate } from 'react-router-dom';
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { getSender } from '../config/ChatLogic';



const Navbar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  }

  const { setSelectedChat, user, notification, setNotification } = ChatState();

  return (
    <Box width={"100%"} h={"60px"} display={"flex"} justifyContent={"end"} mt={0} bg={"white"} p={"5px 20px 0px 20px"}>
      <Menu>
        <MenuButton>
            <NotificationBadge count={notification.length} effect={Effect.SCALE} />          
            <BellIcon fontSize={'2xl'} />
        </MenuButton>
        <MenuList pl={2}>
              {!notification.length && "No New Messages"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat.isGroupChat
                    ? `New Message in ${notif.chat.chatName}`
                    : `New Message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
        </MenuList>      
      </Menu>

      <Menu>
        <MenuButton as={Button} colorScheme={'white'} color={'black'} rightIcon={<ChevronDownIcon/>} p={"20px 20px 0px 20px"}>
          <Avatar size={'sm'} cursor={'pointer'} name={user.username} />
        </MenuButton>
        <MenuList border={0} mt={1} rounded={0}>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>

    </Box>
  )
}

export default Navbar