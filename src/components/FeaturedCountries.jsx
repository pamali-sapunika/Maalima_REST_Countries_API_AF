import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Spinner,
  Image,
  Flex,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";

const FeaturedCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");

        const selected = new Set();
        const randomCountries = [];

        while (randomCountries.length < 5) {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          const country = response.data[randomIndex];
          if (!selected.has(country.cca3)) {
            selected.add(country.cca3);
            randomCountries.push({
              name: country.name.common,
              flag: country.flags.png,
              cca3: country.cca3,
              capital: country.capital?.[0] || "N/A",
              region: country.region || "N/A",
              population: country.population || 0,
              languages: country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A",
            });
          }
        }

        setCountries(randomCountries);
      } catch (err) {
        setError("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    };

    fetchRandomCountries();
  }, []);

  return (
    <Box
      mt={10}
      px={4}
      py={10}
      backgroundImage="url('https://images.pexels.com/photos/919239/pexels-photo-919239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderRadius="xl"
    >
        <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={6} color="white">
          Countries of the Day
        </Text>

        <Box
            backdropFilter="blur(10px)"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            borderRadius="xl"
            padding={6}
            boxShadow="lg"
        >
            {loading ? (
            <Spinner size="xl" />
            ) : error ? (
            <Text color="red.500">{error}</Text>
            ) : (
            <Flex justify="center" flexWrap="wrap" gap={6}>
                {countries.map((country) => (
                <Card
                    key={country.cca3}
                    maxW="sm"
                    width={{ base: "100%", sm: "45%", md: "30%", lg: "18%" }}
                    backdropFilter="blur(3px)"
                    backgroundColor="rgba(255, 255, 255, 0.7)"
                    boxShadow="md"
                    
                >
                    <Image
                    src={country.flag}
                    alt={`Flag of ${country.name}`}
                    height="180px"
                    objectFit="cover"
                    borderTopRadius={"6px"}
                    />
                    <CardBody>
                    <Heading size="md">{country.name}</Heading>
                    <Text mt={2}><strong>Capital:</strong> {country.capital}</Text>
                    <Text><strong>Region:</strong> {country.region}</Text>
                    <Text><strong>Population:</strong> {country.population.toLocaleString()}</Text>
                    <Text><strong>Languages:</strong> {country.languages}</Text>
                    </CardBody>
                    <Divider />
                    <CardFooter justifyContent="center">
                    <Button variant="solid" colorScheme="teal">
                        View More
                    </Button>
                    </CardFooter>
                </Card>
                ))}
            </Flex>
            )}
        </Box>
    </Box>
  );
};

export default FeaturedCountries;
