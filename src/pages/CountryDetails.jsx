import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Image, Heading, SimpleGrid, Stack, Link, HStack, Card, VStack, Flex } from "@chakra-ui/react";
import axios from "axios";
import { FaPeopleRobbery } from "react-icons/fa6";
import LogoStyle1 from "../components/LogoStyle1.jsx";
import { PiMapPinAreaBold } from "react-icons/pi";
import { PiCityFill } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";

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
    <Box maxW="90%" mx="auto" mt="120px" p={6} boxShadow="lg" borderRadius="lg" bg="gray.50">
        <Heading fontSize={"45px"}>{country.name.common} ({country.cca3})</Heading>
        <Text fontWeight={"light"} mb={10}>{country.subregion || "N/A"}, {country.region}</Text>

        <Box>
            <Image src={country.flags.png} alt={country.name.common} mb={8} borderRadius="md" maxW="600px" />
        </Box>
     

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
            <Text>
                Official Name:
                <br />
                <Text as="span"  fontSize="30px">
                    {country.name.official}
                </Text>
            </Text>
         
            {/* <HStack align="start" spacing={3}>
            <FaPeopleRobbery style={{ marginTop: "5px" }} />
            <Box>
                <Text>
                Population
                </Text>
                <Text as="span" fontWeight="bold" fontSize="30px">
                {country.population.toLocaleString()}
                </Text>
            </Box>
            </HStack> */}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%" mt={6} mb={10}>
            <Card p={4} boxShadow="md" borderRadius="md" alignItems={"center"} alignContent={"center"} justifyContent={"center"} height={"200px"}>
                <Box align="start" spacing={3} mt={"-3"}>
                    <HStack mb={5} justifyContent={"center"}>
                        <PiCityFill />
                        <Text>
                            Capital
                        </Text>
                    </HStack>
                    <Box>
                        <Text textAlign={"center"} fontWeight="bold" fontSize="35px">
                        {country.capital.toLocaleString()}
                        </Text>
                    </Box>
                </Box>
            </Card>
            <Card p={4} boxShadow="md" borderRadius="md" alignItems={"center"} alignContent={"center"} justifyContent={"center"} height={"200px"}>
                <Box align="start" spacing={3} mt={"-3"}>
                    <HStack mb={5} justifyContent={"center"}>
                        <FaPeopleRobbery />
                        <Text>
                            Population
                        </Text>
                    </HStack>
                    <Box>
                        <Text textAlign={"center"} fontWeight="bold" fontSize="35px">
                        {country.population.toLocaleString()}
                        </Text>
                    </Box>
                </Box>
            </Card>
            <Card p={4} boxShadow="md" borderRadius="md" alignItems={"center"} alignContent={"center"} justifyContent={"center"} height={"200px"}>
                <Box align="start" spacing={3} mt={"-3"}>
                    <HStack mb={5} justifyContent={"center"}>
                        <PiMapPinAreaBold />
                        <Text>
                            Area
                        </Text>
                    </HStack>
                    <Box>
                        <Text textAlign={"center"} fontWeight="bold" fontSize="35px">
                        {country.area.toLocaleString()} km²
                        </Text>
                    </Box>
                </Box>
            </Card>
        </SimpleGrid>


        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
            <VStack alignItems={"start"} spacing={6}>
                <HStack align="start" spacing={3}>
                    <IoLanguage style={{ marginTop: "5px" }} />
                    <Box>
                        <Text fontWeight={"light"}>
                        Languages:
                        </Text>
                        <Text as="span" fontWeight="mediun" fontSize="20px">
                            {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
                        </Text>
                    </Box>
                </HStack>

                <HStack align="start" spacing={3}>
                    <MdCurrencyExchange style={{ marginTop: "5px" }} />
                    <Box>
                        <Text fontWeight={"light"}>
                        Currencies:
                        </Text>
                        <Text as="span" fontWeight="mediun" fontSize="20px">
                            {country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ") : "N/A"}
                        </Text>
                    </Box>
                </HStack>

                <HStack align="start" spacing={3}>
                    <IoTime style={{ marginTop: "5px" }} />
                    <Box>
                        <Text fontWeight={"light"}>
                        Timezones:
                        </Text>
                        <Text as="span" fontWeight="mediun" fontSize="20px">
                        {country.timezones?.join(", ")}
                        </Text>
                    </Box>
                </HStack>
            </VStack>            

            <VStack backgroundColor={"red.200"} p={4} borderRadius={"12"} borderColor={"gray.400"}>

                {country.coatOfArms?.png && (
                    <Box w="90%">
                        <Text mb={2}>{country.flags?.alt}</Text>

                        <br/>
                        <Text>
                            Coordinates:{" "}
                            <Text as="span" fontWeight="bold">
                                {country.latlng?.join(", ") || "N/A"}
                            </Text>
                        </Text>
                
                        <Text>
                            Landlocked:{" "}
                            <Text as="span" fontWeight="bold">
                                {country.landlocked ? "Yes" : "No"}
                            </Text>
                        </Text>

                        <Text>
                            Borders:{" "}
                            <Text as="span" fontWeight="bold">
                                {country.borders?.join(", ") || "None"}
                            </Text>
                        </Text>

                        <Text>
                            Demonyms (EN):{" "}
                            <Text as="span" fontWeight="bold">
                                Male: {country.demonyms?.eng?.m || "N/A"}, Female: {country.demonyms?.eng?.f || "N/A"}
                            </Text>
                        </Text>

                        <Flex justify="flex-end" mr={10}>
                            <Image
                                src={country.coatOfArms.png}
                                alt={`${country.name.common} Coat of Arms`}
                                maxW="150px"
                            />
                        </Flex>
                    </Box>
                )}
            </VStack>

            {/* <Text>Currencies:{country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ") : "N/A"}</Text>
            <Text>Timezones:{country.timezones?.join(", ")}</Text>
            <Text>Landlocked:{country.landlocked ? "Yes" : "No"}</Text>
            <Text>Area:{country.area.toLocaleString()} km²</Text>
            <Text>Top-level domain:{country.tld?.join(", ")}</Text>
            <Text>Bordering Countries:{country.borders?.join(", ") || "None"}</Text>
            <Text>UN Member:{country.unMember ? "Yes" : "No"}</Text>
            <Text>Calling Code:{country.idd ? `${country.idd.root}${country.idd.suffixes?.[0]}` : "N/A"}</Text> */}
        </SimpleGrid>

        {country.maps?.googleMaps && (
            <Stack mt={6} align="center">
                <Link href={country.maps.googleMaps} isExternal color="blue.500">
                    View on Google Maps
                </Link>
            </Stack>
        )}
    </Box>
  );
};

export default CountryDetails;
