import { Button, Container, Flex, HStack, Box, useColorMode, Image, IconButton, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuMoon, LuSun, LuMenu } from "react-icons/lu"; // Added LuMenu icon

const Navbar = ({ user, handleLogout }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for controlling Drawer

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
          <Link to="/" fontSize="25px" color="gray.800">
            Countries
          </Link>
        </Flex>

        {/* Desktop/Tablet View (Hides hamburger menu) */}
        <HStack spacing={3} alignItems="center" display={{ base: "none", md: "flex" }}>
          {user ? (
            <Button onClick={handleLogout} size="sm">Logout</Button>
          ) : (
            <Button as={Link} to="/login" size="sm">Login</Button>
          )}

          <Button as={Link} to="/favorites" size="sm" bgColor=" #f7bf45">
            Favorites
          </Button>

          <Button onClick={toggleColorMode} size="sm">
            {colorMode === "light" ? <LuMoon /> : <LuSun size={18} />}
          </Button>
        </HStack>

        {/* Hamburger Menu for Mobile View */}
        <IconButton
          aria-label="Open Menu"
          icon={<LuMenu />}
          size="md"
          onClick={onOpen}
          display={{ base: "flex", md: "none" }} 
        />
      </Flex>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <Flex direction="column" align="start" gap={4}>

                  <Button as={Link} to="/favorites" size="sm" colorScheme="blue">
                    Favorites
                  </Button>

                  <Button onClick={toggleColorMode} size="sm">
                    {colorMode === "light" ? <LuMoon /> : <LuSun size={18} />}
                  </Button>
                </Flex>
              </DrawerBody>

              <DrawerFooter>
                {user ? (
                  <Button onClick={handleLogout} size="sm">Logout</Button>
                ) : (
                  <Button as={Link} to="/login" size="sm">Login</Button>
                )}
              </DrawerFooter>
          </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
