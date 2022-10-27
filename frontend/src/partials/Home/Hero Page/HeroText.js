import React from "react";
import { Box, Text ,useColorModeValue, Button} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const HeroText = () =>{
    return(
        <Box>
            <Text align='start' mx='80px'>
                <Text py={5} fontSize={48} fontFamily={'Work Sans'} fontWeight={'bold'} color={useColorModeValue('gray.700', 'gray.50')}>
                    Immerse in a chat experience you’ve never seen before
                </Text>
               <Text fontSize={22} fontWeight={'light'}> With security issues rotating around the virtual space, HeyJude gives a completely safeguarded space to you and your group to discuss.</Text>
            </Text>

            <Box align='center' my='30px'>
                <Link to="/signup">
                    <Button colorScheme='messenger' px={10} variant='solid' color="white" align='center'>
                        Start Now for Free
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default HeroText;