import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={6} mt={12} width="100%">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: 4, md: 12 }}
      >
        <Text fontSize="sm" mb={{ base: 2, md: 0 }}>
          © {new Date().getFullYear()} Explore the World. All rights reserved.
        </Text>
        <Flex gap={4}>
          <Link href="https://github.com" isExternal>
            <Icon as={FaGithub} boxSize={5} />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedin} boxSize={5} />
          </Link>
          <Link href="https://yourwebsite.com" isExternal>
            <Icon as={FaGlobe} boxSize={5} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;

// const Layout = ({ children }) => {
//   return (
//     <Flex direction="column" minHeight="100vh">
//       {/* Main Content */}
//       <Box flexGrow={1}>{children}</Box>

//       {/* Footer */}
//       <Footer />
//     </Flex>
//   );
// };

// export default Layout;

