import { Container, Box, Button, FormControl, FormLabel, Input, Heading, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const user = {
    username,
    token: `${Math.random().toString(36).substr(2)}`, // generate a mock token
  };

  const handleLogin = () => {
    if (!username || !password) {
      toast({
        title: 'Missing credentials',
        description: 'Please enter both username and password.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }
  
    // Simulate a user object with a mock token
    const user = {
      username,
      token: `mock-token-${Math.random().toString(36).substr(2)}`,
    };
  
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    window.location.href = '/userProfile';
  };
  

  return (
    <Container maxW="lg" justifyContent={"center"} alignItems={"center"} py={20}>
        <Box
          bg="white"
          p={6}
          rounded="md"
          shadow="lg"
          borderWidth={1}
          borderColor="gray.200"
        >
          <Heading as="h2" size="lg" textAlign="center" mb={6}>
            Login
          </Heading>
          
          <FormControl id="username" mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isRequired
            />
          </FormControl>

          <FormControl id="password" mb={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isRequired
            />
          </FormControl>

          <Button
            colorScheme="teal"
            width="full"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
    </Container>
  );
};

export default Login;
