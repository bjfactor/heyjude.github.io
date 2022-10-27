import React from "react";
import { Box, Heading, Text ,useColorModeValue, Tooltip, Stack, List, ListItem, ListIcon, Button,} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Plans = ()=>{
    return (
        <Box w={"100%"}>
        <Header />
        <Box pt='10px' minH='950px'>
            <Box mb='80px'>
                <Heading fontSize={{md:60 , sm: 30}} fontFamily={'Work Sans'} fontWeight={'black'} color={useColorModeValue('gray.700', 'gray.50')} align='center' mt='100px' >
                    Try the #1 Rated Secured Communication App Free for 14 Days
                </Heading>
            </Box>
 
            <Box py={6} display={{md:'flex' , sm:'block'}} gap={{md:'30px', sm:'30px'}} justifyContent='center' ms={{sm:'80px'}} mt='25px'>
                <Box maxW={'330px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} mb={{sm:'10px'}}>
                    <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
                    <Text fontSize={'xl'} fontWeight={500} bg={useColorModeValue('blue.50', 'blue.900')} p={2} px={3} color={'blue.500'} rounded={'full'}>
                        Basic(free)
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'3xl'}>$</Text>
                        <Text fontSize={'6xl'} fontWeight={800}>
                        0
                        </Text>
                        <Text color={'gray.500'}>/14 Days</Text>
                    </Stack>
                    </Stack>

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="blue.400" /> Experience Elevated Chat<Tooltip label="Experience an elevated chat experience with high-end encryption details to chat securely" aria-label='A tooltip'>&nbsp;❔</Tooltip>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="blue.400" /> Limited options <Tooltip label="Limited options in searching users and workspaces" aria-label='A tooltip'>&nbsp;❔</Tooltip>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="blue.400" />  Limited functionalities
                        </ListItem>
                        <ListItem>
                            &nbsp;
                        </ListItem>
                    </List>

                    <Button mt={10} w={'full'} bg={'blue.400'} color={'white'} rounded={'xl'} boxShadow={'0 5px 20px 0px rgb(66 153 225 / 43%)'} _hover={{bg:'blue.500',}} _focus={{bg:'blue.500',}}>
                        Start your trial
                    </Button>
                    </Box>
                </Box>


                <Box maxW={'330px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} mb={{sm:'10px'}}>
                    <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
                    <Text fontSize={'xl'} fontWeight={500} bg={useColorModeValue('blue.50', 'blue.900')} p={2} px={3} color={'blue.500'} rounded={'full'}>
                        Premium
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'3xl'}>$</Text>
                        <Text fontSize={'6xl'} fontWeight={800}>
                        35
                        </Text>
                        <Text color={'gray.500'}>/month</Text>
                    </Stack>
                    </Stack>

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="blue.400" /> Full scope <Tooltip label="Full scope of search options in HeyJude" aria-label='A tooltip'>&nbsp;❔</Tooltip>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="blue.400" /> Incognito mode <Tooltip label="A feature that lets you set yourself as an anonymous user that is able to interact with any users a premium user can search and interact with" aria-label='A tooltip'>&nbsp;❔</Tooltip>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="blue.400" /> All features
                            </ListItem>
                            <ListItem>
                                &nbsp;
                            </ListItem>
                        </List>

                        <Button mt={10} w={'full'} bg={'blue.400'} color={'white'} rounded={'xl'} boxShadow={'0 5px 20px 0px rgb(66 153 225 / 43%)'} _hover={{bg:'blue.500',}} _focus={{bg:'blue.500',}}>
                            Start with plan
                        </Button>
                    </Box>
                </Box>

                <Box maxW={'330px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} mb={{sm:'10px'}}>
                    <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
                    <Text fontSize={'xl'} fontWeight={500} bg={useColorModeValue('blue.50', 'blue.900')} p={2} px={3} color={'blue.500'} rounded={'full'}>
                        Work Space
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'3xl'}>$</Text>
                        <Text fontSize={'6xl'} fontWeight={800}>
                        150
                        </Text>
                        <Text color={'gray.500'}>/month</Text>
                    </Stack>
                    </Stack>

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="blue.400" /> 15 members workplace
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="blue.400" /> Premium user perks
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="blue.400" /> Have own customizable workspace
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="blue.400" /> All features
                            </ListItem>
                        </List>

                        <Button mt={10} w={'full'} bg={'blue.400'} color={'white'} rounded={'xl'} boxShadow={'0 5px 20px 0px rgb(66 153 225 / 43%)'} _hover={{bg:'blue.500',}} _focus={{bg:'blue.500',}}>
                            Start with plan
                        </Button>
                    </Box>

                    
                </Box>
            </Box>

            </Box>
            <Box style={{ marginTop: "150px" }} >
                <Footer />
            </Box>
        </Box>
    )
}

export default Plans;