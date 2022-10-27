import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Text} from '@chakra-ui/react';
import HeroImage from '../Home/Hero Page/HeroImage';
import HeroText from '../Home/Hero Page/HeroText';
// import Testimonials from './Testimonials';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo) {
            navigate("/");
        }
    }, [navigate])

  return (
    <Box display={"flex"} flexDirection={"column"}>
    <Header/>
    <Box>
    <Box pt='76px'> 
      <Box  display={{ md: 'flex' , sm: 'block'}}>
        <Box w={{md:'50%', sm:'100%'}} h="500px">
          <Text my='100px'><HeroText/></Text>
        </Box>
        <Box w={{md:'50%', sm:'100%'}}>
          <HeroImage/>
        </Box>
      </Box>

      {/* <Box>
        <Testimonials/>
      </Box> */}

      {/* <Box display={{md: 'flex' , sm:'block'}} >
        <Box w={{md:'40%', sm:'100%'}} >
            <FeatureImage/>
        </Box> 
        <Box w={{md:'60%', sm:'100%'}}>
          <FeatureList/>
        </Box>
      </Box> */}
      </Box>  
      </Box>
      <Box style={{ marginTop: "230px" }} >
        <Footer />
      </Box>
    </Box>
  )
}

export default Home