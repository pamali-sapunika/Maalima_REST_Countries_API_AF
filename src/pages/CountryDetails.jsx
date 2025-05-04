import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Image, Heading, SimpleGrid, Stack, Link, HStack, Card, VStack, Flex, Container } from "@chakra-ui/react";
import axios from "axios";
import { FaPeopleRobbery } from "react-icons/fa6";
import { PiMapPinAreaBold } from "react-icons/pi";
import { PiCityFill } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import RandomBackground from "../components/RandomBackground.jsx";

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
        setCountry(res.data[0]);
      } catch (err) {
        console.error("Failed to fetch country:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  if (loading) return <Spinner size="xl" mt={10} />;
  if (!country) return <Text mt={10}>Country not found.</Text>;

  return (
    <RandomBackground>
      <Container 
        minWidth="100%"
        pt={10}
      >
        <Box
          maxW="90%"
          mx="auto"
          p={6}
          boxShadow="lg"
          borderRadius="lg"
          bg="rgba(255, 255, 255, 0.50)" // semi-transparent background
          backdropFilter="blur(4px)"
          mt={14}
        >
          <Heading fontSize={{ base: "30px", md: "45px" }}>
            {country.name.common} ({country.cca3})
          </Heading>
          <HStack spacing={2}>
            <GoLocation />
            <Text fontWeight="light" fontSize={{ base: "sm", md: "md" }}>
              {country.subregion || "N/A"}, {country.region}
            </Text>
          </HStack>
          {country.maps?.googleMaps && (
            <Stack mb={10}>
              <Link href={country.maps.googleMaps} isExternal color="blue.500" fontSize={{ base: "sm", md: "md" }}>
                View on Google Maps
              </Link>
            </Stack>
          )}

          <Box>
            <Image 
              src={country.flags.png} 
              alt={country.name.common} 
              mb={8} 
              borderRadius="md" 
              maxW={{ base: "150px", md: "250px" }} 
              mx="auto" // Center the image
            />
          </Box>
        
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
            <Text fontSize={{ base: "sm", md: "md" }}>
              Official Name:
              <br />
              <Text as="span" fontSize={{ base: "20px", md: "30px" }} fontWeight="bold">
                {country.name.official}
              </Text>
            </Text>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%" mt={6} mb={10}>
            <Card p={4} boxShadow="md" borderRadius="md" alignItems="center" height={{ base: "auto", md: "200px" }}>
              <Box align="start" spacing={3} mt="-3">
                <HStack mb={5} justifyContent="center">
                  <PiCityFill />
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    Capital
                  </Text>
                </HStack>
                <Box>
                  <Text textAlign="center" fontWeight="bold" fontSize={{ base: "20px", md: "35px" }}>
                    {country.capital ? country.capital.toLocaleString() : "N/A"}
                  </Text>
                </Box>
              </Box>
            </Card>
            <Card p={4} boxShadow="md" borderRadius="md" alignItems="center" height={{ base: "auto", md: "200px" }}>
              <Box align="start" spacing={3} mt="-3">
                <HStack mb={5} justifyContent="center">
                  <FaPeopleRobbery />
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    Population
                  </Text>
                </HStack>
                <Box>
                  <Text textAlign="center" fontWeight="bold" fontSize={{ base: "20px", md: "35px" }}>
                    {country.population.toLocaleString()}
                  </Text>
                </Box>
              </Box>
            </Card>
            <Card p={4} boxShadow="md" borderRadius="md" alignItems="center" height={{ base: "auto", md: "200px" }}>
              <Box align="start" spacing={3} mt="-3">
                <HStack mb={5} justifyContent="center">
                  <PiMapPinAreaBold />
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    Area
                  </Text>
                </HStack>
                <Box>
                  <Text textAlign="center" fontWeight="bold" fontSize={{ base: "20px", md: "35px" }}>
                    {country.area.toLocaleString()} km²
                  </Text>
                </Box>
              </Box>
            </Card>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
            <VStack alignItems="start" spacing={6}>
              <HStack align="start" spacing={3}>
                <IoLanguage style={{ marginTop: "5px" }} />
                <Box>
                  <Text fontWeight="light" fontSize={{ base: "sm", md: "md" }}>
                    Languages:
                  </Text>
                  <Text as="span" fontWeight="medium" fontSize={{ base: "sm", md: "20px" }}>
                    {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
                  </Text>
                </Box>
              </HStack>

              <HStack align="start" spacing={3}>
                <MdCurrencyExchange style={{ marginTop: "5px" }} />
                <Box>
                  <Text fontWeight="light" fontSize={{ base: "sm", md: "md" }}>
                    Currencies:
                  </Text>
                  <Text as="span" fontWeight="medium" fontSize={{ base: "sm", md: "20px" }}>
                    {country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ") : "N/A"}
                  </Text>
                </Box>
              </HStack>

              <HStack align="start" spacing={3}>
                <IoTime style={{ marginTop: "5px" }} />
                <Box>
                  <Text fontWeight="light" fontSize={{ base: "sm", md: "md" }}>
                    Timezones:
                  </Text>
                  <Text as="span" fontWeight="medium" fontSize={{ base: "sm", md: "20px" }}>
                    {country.timezones?.join(", ")}
                  </Text>
                </Box>
              </HStack>
            </VStack>            

            <VStack backgroundColor="red.200" p={5} borderRadius="12" borderColor="gray.400" w="100%" height="500px">
              {country.coatOfArms?.png && (
                <Box w="100%">
                  <Text mb={4}>{country.flags?.alt}</Text>

                  <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" w="100%">
                    {/* Left Side - Logo */}
                    <Box flex="1" display="flex" justifyContent={{ base: "center", md: "flex-start" }} mb={{ base: 6, md: 0 }}>
                      <Image
                        src={country.coatOfArms.png}
                        alt={`${country.name.common} Coat of Arms`}
                        maxW="150px"
                      />
                    </Box>

                    {/* Right Side - Details */}
                    <VStack flex="2" pl={{ md: 6 }} align="stretch" spacing={4}>
                      <Flex justify="space-between" align="center">
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          Coordinates:{" "}
                          <Text as="span" fontWeight="bold">
                            {country.latlng?.join(", ") || "N/A"}
                          </Text>
                        </Text>
                      </Flex>

                      <Flex justify="space-between" align="center">
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          Landlocked:{" "}
                          <Text as="span" fontWeight="bold">
                            {country.landlocked ? "Yes" : "No"}
                          </Text>
                        </Text>
                      </Flex>

                      <Flex justify="space-between" align="center">
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          Borders:{" "}
                          <Text as="span" fontWeight="bold">
                            {country.borders?.join(", ") || "None"}
                          </Text>
                        </Text>
                      </Flex>

                      <Flex justify="space-between" align="center">
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          Demonyms (EN):{" "}
                          <Text as="span" fontWeight="bold">
                            Male: {country.demonyms?.eng?.m || "N/A"} | Female: {country.demonyms?.eng?.f || "N/A"}
                          </Text>
                        </Text>
                      </Flex>
                    </VStack>
                  </Flex>
                </Box>
              )}
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </RandomBackground>
  );
};

export default CountryDetails;
