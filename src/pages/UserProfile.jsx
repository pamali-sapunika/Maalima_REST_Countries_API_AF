import { Box, Text, Heading, VStack, Card, CardBody, Divider, Button, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ user }) => {
  const storedUser = user || JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  // Theme-aware colors
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const tokenColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={bgColor} minH="100vh" display="flex" justifyContent="center" alignItems="center" px={4}>
      <Card maxW="md" w="full" boxShadow="lg" borderRadius="xl" bg={cardBg}>
        <CardBody>
          <VStack spacing={4} align="start">
            <Heading fontSize="30px" fontWeight="light" color={headingColor}>
              User Profile
            </Heading>
            <Divider />
            <Text fontSize="md" color={textColor}>
              <Text as="span" fontWeight="medium">Username:</Text>{' '}
              <Text as="span" fontWeight="light">{storedUser?.username || "Guest"}</Text>
            </Text>
            <Text fontSize="md" color={tokenColor}>
              <Text as="span" fontWeight="medium">Session Token:</Text>{' '}
              <Text as="span" fontWeight="light">{storedUser?.token || "None"}</Text>
            </Text>
            <Button colorScheme="yellow" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default UserProfile;
