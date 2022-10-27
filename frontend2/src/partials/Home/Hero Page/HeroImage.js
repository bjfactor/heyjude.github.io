import React from "react";
import { Box, Image} from '@chakra-ui/react';

const HeroImage = ()=>{
    return(
        <Box  h="500px">
            <Image objectFit='cover' h='500px' w='100%' src='https://res.cloudinary.com/dctln226w/image/upload/v1666713866/samples/avatar/HeroImage4_a3qkif.png' alt='Hero Image' />
        </Box>
    )
}
export default HeroImage;
