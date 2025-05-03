import { Button, Container, Flex, HStack, Text, useColorMode, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
        <Container 
            maxWidth={"container.2xl"} 
            px={4} 
            bg="transparent" 
            position="fixed" 
            w="full" 
            top="0" 
            zIndex="999"
            backdropFilter="blur(9px)" 
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
            >
            <Flex h={20} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }}>
                <Flex alignItems="center">

                    <Image src="/sailboat_black.png" alt="Logo" boxSize="30px" mr={2} /> 
                    <Link to={"/"} fontSize={{ base: "22", sm: "19" }} color={"grey.800"}>
                        Countries API
                    </Link>
                </Flex>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/dashboard"} fontSize={{ base: "12", sm: "12" }}>Dashboard</Link>
                    <Link to={"/report"} fontSize={{ base: "12", sm: "12" }}>Report</Link>

                    <Button onClick={toggleColorMode} size={['sm', 'md']}>
                    {colorMode === "light" ?  <LuMoon /> : <LuSun size={18} />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    </div>
  );
};

export default Navbar;
