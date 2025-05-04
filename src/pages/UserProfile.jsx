import { Box, Text, Heading, VStack, Card, CardBody, Divider } from '@chakra-ui/react';

const UserProfile = ({ user }) => {
  const storedUser = user || JSON.parse(localStorage.getItem('user'));

  return (
    <Box bg="gray.100" minH="100vh" display="flex" justifyContent="center" alignItems="center" px={4}>
      <Card maxW="md" w="full" boxShadow="lg" borderRadius="xl" bg="white">
        <CardBody>
          <VStack spacing={4} align="start">
            <Heading size="md" color="teal.600">User Profile</Heading>
            <Divider />
            <Text fontSize="lg"><strong>Username:</strong> {storedUser?.username || "Guest"}</Text>
            <Text fontSize="sm" color="gray.600"><strong>Session Token:</strong> {storedUser?.token || "None"}</Text>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default UserProfile;
