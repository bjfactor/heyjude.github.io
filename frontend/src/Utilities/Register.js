import { Box, Button, Center, Grid, GridItem, Image, Text, useToast, VStack } from '@chakra-ui/react'
import { faDoorOpen, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TermsAndConditions from './TermsAndConditions';

const Register = () => {
  
  const Toast = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  
  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      Toast({
        title: "Please fill all the fileds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      // const config = {
      //     headers: {
      //         "Content-type": "application/json",
      //     },
      // };

      const { data } = await axios.post("/api/user/", { name, email, password });
      Toast({
        title: "Registration Successful",
        status: "Scuccess",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate('/chats')
    } catch (error) {
      Toast({
        title: "Error Occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false)
    }
  };

  return (
    <Grid templateColumns='repeat(10, 1fr)' width={"100%"}>
      <GridItem colSpan={{ base: 5, md: 5, lg: 3 }} h='720px' ml={"50px"}>
        <Box alignItems={"center"} justifyContent={"center"} display={"flex"} flexDirection={"column"}>
          <Center mt="150px">
            <Text fontSize={"35px"} fontWeight="700" fontFamily="Work Sans, sans-serif" color="black">Create an account</Text>
          </Center>

          <VStack w={{ lg: "100%", md: "75%", base: "100%" }} spacing="12px" mt={5} >
            <form onSubmit={submitHandler} className="w-75">
              <div className="form-floating mb-3">
                <input className="form-control" style={{ paddingTop: "35px" }} type="text" placeholder='Enter Username' id="username" value={name} name="username" onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="username" className='text-secondary'><FontAwesomeIcon className="me-2 text-secondary" icon={faUser} />Username</label>
              </div>

              <div className="form-floating mb-3">
                <input className="form-control" style={{ paddingTop: "35px" }} type="email" placeholder='Enter email address' id="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="email" className='text-secondary'><FontAwesomeIcon className="me-2 text-secondary" icon={faEnvelope} />Email Address</label>
              </div>

              <div className="form-floating mb-3">
                <input className="form-control" style={{ paddingTop: "35px" }} type="password" placeholder='Enter Password' id="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="password" className='text-secondary'><FontAwesomeIcon className="me-2 text-secondary" icon={faLock} />Password</label>
              </div>

              <div className="form-floating mb-4">
                <input className="form-control" style={{ paddingTop: "35px" }} type="password" placeholder='Confirm Password' id="confirmPassword" value={confirmpassword} name="confirmPassword" onChange={(e)=>setConfirmpassword(e.target.value)}/>
                <label htmlFor="confirm_password" className='text-secondary'><FontAwesomeIcon className="me-2 text-secondary" icon={faLock}/>Confirm Password</label>
              </div>

              <div>
                <TermsAndConditions/>
              </div>

              <div className="form-submit mt-3">
                <Button type="submit" isLoading={loading} loadingtext='Create Account' colorScheme='messenger' variant='solid' spinnerPlacement='start'py='6'  w='100%'>Create Account<FontAwesomeIcon className="ms-2" icon={faDoorOpen} /></Button>
              </div>
            </form>
          </VStack>
        </Box>
        <Box textAlign="center" justifyContent={"center"} my={10} display={"flex"} flexDir={"row"}>
          <Text fontSize="xl" mr={2}>Already have an account?</Text>
          <Link to="/signin" className="text-primary fw-semibold fs-5">Login Now</Link>
        </Box>
      </GridItem>
      <GridItem colStart={{ base: "none", md: "none", lg: 4 }} colEnd={11} h='100vh' >
        <Image height={"100vh"} src="https://res.cloudinary.com/hellobryan/image/upload/v1666756121/Decentralized_bbvllx.png" alt="login"></Image>
      </GridItem>
    </Grid>
  )
}

export default Register