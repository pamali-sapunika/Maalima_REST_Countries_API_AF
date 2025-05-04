// src/pages/Login.jsx
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const { setUser } = useUser();
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   if (!username.trim()) {
  //     toast({
  //       title: 'Username required',
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     return;
  //   }

  //   if (!password.trim()) {
  //     toast({
  //       title: 'Password required',
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     return;
  //   }

  //   const user = {
  //     username,
  //     token: `${username}-${Date.now()}`,
  //     favorites: [],
  //   };

  //   setUser(user); // This triggers localStorage update
  //   navigate('/userProfile'); 
  // };

  const handleLogin = () => {
    if (!username.trim()) {
      toast({
        title: 'Username required',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    if (!password.trim()) {
      toast({
        title: 'Password required',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    const user = {
      username,
      token: `${username}-${Date.now()}`,
      favorites: [],
    };
  
    setUser(user); // This triggers localStorage update
    navigate('/userProfile'); 
  };
  

  return (
    <Box
      position="relative"
      bgImage="url('https://images.pexels.com/photos/753337/pexels-photo-753337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="100vh"
    >
      <Container centerContent py={{ base: 10, md: 20 }}>
        <Box bg="rgba(196, 196, 196, 0.6)" p={6} rounded="md" shadow="md" w="full" maxW="md">
          <Heading mb={6} textAlign="center" fontSize={{ base: '2xl', md: '3xl' }} color="white">
            Login
          </Heading>
          <FormControl mb={4}>
            <FormLabel color="white">Username</FormLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              color="white"
              _placeholder={{ color: "#852a7c" }}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="white">Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              _placeholder={{ color: "#852a7c" }}
            />
            <FormHelperText color="black">Enter your password securely</FormHelperText>
          </FormControl>
          <Button
            bgGradient="linear(to-r, #fda41a, #655186, #2386dc)"
            color="white"
            _hover={{ opacity: 0.9 }}
            w="full"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
