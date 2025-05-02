import { Box, Text } from '@chakra-ui/react';

const Profile = ({ user }) => {
  return (
    <Box>
      <Text>Welcome, {user.username}!</Text>
      <Text>Your session is active with token: {user.token}</Text>
    </Box>
  );
};

export default Profile;
