import { HStack, Image, Box } from "@chakra-ui/react";

const LogoStyle1 = ({ imageSrc }) => {
  return (
    <HStack align="center" justify="center" my={7} spacing={4} width="100%">

      <Box width={"250px"} height="2px" bg="#f7bf45" borderRadius={"12px"}/>

      <Image src={imageSrc} width="30px" height="30px" />

      <Box width={"250px"} height="2px" bg="#f7bf45" borderRadius={"12px"}/>

    </HStack>
  );
};

export default LogoStyle1;
