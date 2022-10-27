import { Box, Button, Center, Grid, GridItem, Image, Text, useToast, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { faArrowRight, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    email: '',
    password: ''
}

const Signin = () => {
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState()
  const navigate = useNavigate();
  const Toast = useToast();

  const { email, password } = user

  const handleChangeInput = e => {
      const { name, value } = e.target
      setUser({...user, [name]:value})
  }

  const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            Toast({
                title: "Please fill all the fileds",
                status: "warning",
                isClosable: true,
                position: "bottom-left",
            });
            setLoading(false);
            return;
        }

        
        try {
            const { data } = await axios.post("/api/user/login", { email, password });
            Toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
            });
            
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)
            navigate('/chats')
            
        } catch (error) {
            Toast({
                title: "Error Occur",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
            });
            setLoading(false);
        }
    }


  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={1} w={"100%"}>
      <GridItem colSpan={{ base: 5, md: 5, lg: 2 }} h='720px'>
        <Box alignItems={"center"} justifyContent={"center"} display={"flex"} flexDirection={"column"} mt="150px">
          <Center mt={5}>
            <Text fontSize={{ lg: "30px", md: "25px", base: "20px"}} fontWeight="700" fontFamily="Work Sans, sans-serif" color="black">Log in to your account</Text>
          </Center>

          <VStack w={{ lg: "100%", md: "125%", base: "150%" }} spacing="12px" mt={5}>
            <form onSubmit={handleSubmit} className="w-50">
              <div className="form-floating mb-3">
                <input className="form-control" style={{ paddingTop: "35px" }} type="email" placeholder='Enter email address' id="email" value={email} name="email" onChange={handleChangeInput}/>
                <label htmlFor="email" className='text-secondary'><FontAwesomeIcon className="me-2 text-secondary" icon={faEnvelope} />Email Address</label>
              </div>

              <div className="form-floating mb-3">
                <input className="form-control" style={{ paddingTop: "35px" }} type="password" placeholder='Enter Password' id="password" value={password} name="password" onChange={handleChangeInput}/>
                <label htmlFor="password" className='text-secondary'><FontAwesomeIcon className="me-2 text-secondary" icon={faLock} />Password</label>
              </div>
              <Link to="/forgot_password" className="d-flex justify-content-end text-primary fs-6">Forgot password?</Link>
              <div className="form-submit mt-3">
                <Button type="submit" isLoading={loading} loadingtext='Login' py='6' colorScheme='messenger' variant='solid' spinnerPlacement='start' w='100%'>Login<FontAwesomeIcon className="ms-2" icon={faArrowRight} /></Button>
              </div>
            </form>
          </VStack>
          <Box>
            <Text fontSize={"xs"} textAlign="justify" justifyContent={"center"} pt={10}>By proceeding, you agree to our Terms and Conditions and Privacy Policy</Text>
          </Box>
          <Box textAlign="center" justifyContent={"center"} my={20} display={"flex"} flexDir={"row"}>
            <Text fontSize="xl" mr={2}>Don't have account yet?</Text>
            <Link to="/signup" className="text-primary fw-semibold fs-5"> Create Now</Link>
          </Box>
        </Box>
      </GridItem>
      <GridItem colStart={{ base: "none", md: "none", lg: 3 }} colEnd={6} h='100vh' marginLeft={"50px"}>
        <Image height={"100vh"} src="https://res.cloudinary.com/hellobryan/image/upload/v1666754805/Decentralized_hjqeg8.png" alt="login"></Image>
      </GridItem>
    </Grid>
  )
}

export default Signin