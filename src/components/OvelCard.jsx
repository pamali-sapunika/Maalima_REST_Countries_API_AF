import React from "react";
import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";

const OvelCard = ({ country }) => {
  return (
    <VStack
      spacing={4}
      bg="whiteAlpha.800"
      p={4}
      borderRadius="xl"
      boxShadow="xl"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
    >
      <Box
        width="150px"
        height="150px"
        borderRadius="full"
        overflow="hidden"
        boxShadow="md"
        border="2px solid #f7bf45"
      >
        <Image
          src={country.flag}
          alt={`Flag of ${country.name}`}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Heading size="sm" color="gray.700">{country.name}</Heading>
      <Text fontSize="sm" color="gray.600"><strong>Capital:</strong> {country.capital}</Text>
      <Text fontSize="sm" color="gray.600"><strong>Region:</strong> {country.region}</Text>
    </VStack>
  );
};

export default OvelCard;
