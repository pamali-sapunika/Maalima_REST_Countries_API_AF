import { Box, Button, Text, Heading, VStack, Card, CardBody, Divider } from '@chakra-ui/react';

const Profile = ({ user }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="70vh" bg="gray.50" px={4}>
      <Card maxW="md" w="full" boxShadow="lg" borderRadius="xl" bg="white">
        <CardBody>
          <VStack spacing={4} align="start">
            <Heading size="md" color="teal.600">User Profile</Heading>
            <Divider />
            <Text fontSize="lg">
              <strong>Username:</strong> {user.username}
            </Text>
            <Text fontSize="md" color="gray.600" wordBreak="break-all">
              <strong>Session Token:</strong> {user.token}
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Profile;
