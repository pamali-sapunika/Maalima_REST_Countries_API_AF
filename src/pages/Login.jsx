// src/pages/Login.js
import { Container, Box, Button, FormControl, FormLabel, Input, Heading, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const toast = useToast();

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

    const user = {
      username,
      token: `${username}-${Date.now()}`, // Simulate token
      favorites: [],
    };

    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    window.location.href = '/userProfile';
  };

  return (
    <Container centerContent py={20}>
      <Box bg="white" p={6} rounded="md" shadow="md" w="full" maxW="md">
        <Heading mb={6} textAlign="center">Login</Heading>
        <FormControl mb={4}>
          <FormLabel>Username</FormLabel>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" w="full" onClick={handleLogin}>Login</Button>
      </Box>
    </Container>
  );
};

export default Login;
