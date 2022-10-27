import React from 'react';
import { Box, Button, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, WrapItem} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon} from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display={"flex"} flexDirection={"row"} justifyContent="space-between" width={'100%'} py={4} px={10}>
      <Box display={"flex"} flexDirection={"row"} >
          <Image src='https://tinyurl.com/2dembc5y' mr={2} w="35px" h="35px" alt='logo' mt="5px"/>
          <Text fontSize={"3xl"} fontFamily="Squada One, sans-serif" >Hey Jude</Text>
      </Box>
      
      <Button display={{ lg: "none", md: "flex", base: "flex" }} pt="1" colorScheme="gray" variant="ghost" color="black" fontSize="2xl" ><FontAwesomeIcon className="ms-2" icon={faBarsStaggered} /> </Button>
      
      <Box display={{ base: "none", md: "none", lg: "flex" }} flexDirection={"row"} pt={1}>
        <WrapItem>
          <Button className="nav-link" colorScheme='gray' variant='ghost' color="black">
            <Link to="/plans">Plans</Link>
          </Button>
          <Menu>
            <MenuButton as={Button} className="nav-link" colorScheme='white' variant='ghost' color="black" rightIcon={<ChevronDownIcon />}>
              Services
            </MenuButton>
            <MenuList border={0} shadow={"none"} mt={1} pl={2}>
              <MenuItem>Health Care Industry</MenuItem>
              <MenuItem>Banking & Finance</MenuItem>
            </MenuList>
          </Menu>
          
          <Menu>
            <MenuButton as={Button} className="nav-link" colorScheme='white' variant='ghost' color="black" rightIcon={<ChevronDownIcon />}>
              More
            </MenuButton>
            <MenuList border={0} shadow={"none"} mt={1} pl={2}>
              <MenuItem>About Us</MenuItem>
              <MenuItem>Privacy</MenuItem>
              <MenuItem>Help Center</MenuItem>
            </MenuList>
          </Menu>
          
        </WrapItem>
        <WrapItem display={"flex"} flexDirection={"row"} >
          <Link to="/signin">
            <Button colorScheme='messenger' px={10} me={3} variant='outline'>
              Login
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button colorScheme='messenger' px={10} variant='solid' color="white">
              Start Now for Free
            </Button>
          </Link>

          <IconButton arial-lable='Dark Mode' ml={3} bg='none' icon={<MoonIcon/>} onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'light'}
          </IconButton>
        </WrapItem>
      </Box>
    </Box>
      
  )
}

export default Header