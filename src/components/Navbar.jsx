import { Button, Container, Flex, HStack, Box, useColorMode, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = ({ user, handleLogout }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      bg="transparent"
      backdropFilter="blur(4px)"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(173, 173, 173, 0.3)",
        zIndex: -1,
      }}
      px={6}
    >
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Image src="/sailboat_black.png" alt="Logo" boxSize="30px" mr={2} />
          <Link to="/" fontSize="19px" color="gray.800">
            Countries API
          </Link>
        </Flex>

        <HStack spacing={3} alignItems="center">

          {user ? (
            <Button onClick={handleLogout} size="sm">Logout</Button>
          ) : (
            <Button as={Link} to="/login" size="sm">Login</Button>
          )}

          <Button as={Link} to="/favorites" size="sm" colorScheme="blue">
            Favorites
          </Button>

          <Button onClick={toggleColorMode} size="sm">
            {colorMode === "light" ? <LuMoon /> : <LuSun size={18} />}
          </Button>

        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
