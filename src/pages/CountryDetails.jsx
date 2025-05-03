import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Image, Heading, SimpleGrid, Stack, Link, HStack, Card } from "@chakra-ui/react";
import axios from "axios";
import { FaPeopleRobbery } from "react-icons/fa6";

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

        <Text>
            Capital:{" "}
            <Text as="span" fontWeight="bold">
                {country.capital?.[0] || "N/A"}
            </Text>
        </Text>


        
        <HStack align="start" spacing={3}>
        <FaPeopleRobbery style={{ marginTop: "5px" }} />
        <Box>
            <Text>
            Population
            </Text>
            <Text as="span" fontWeight="bold" fontSize="30px">
            {country.population.toLocaleString()}
            </Text>
        </Box>
        </HStack>

        <Card>
            hi
        </Card>
        <Card>
            hi
        </Card>
        <Card>
            hi
        </Card>


        <Text>Languages:{country.languages ? Object.values(country.languages).join(", ") : "N/A"}</Text>
        <Text>Currencies:{country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ") : "N/A"}</Text>
        <Text>Timezones:{country.timezones?.join(", ")}</Text>
        <Text>Landlocked:{country.landlocked ? "Yes" : "No"}</Text>
        <Text>Area:{country.area.toLocaleString()} km²</Text>
        <Text>Top-level domain:{country.tld?.join(", ")}</Text>
        <Text>Bordering Countries:{country.borders?.join(", ") || "None"}</Text>
        <Text>UN Member:{country.unMember ? "Yes" : "No"}</Text>
        <Text>Start of Week:{country.startOfWeek}</Text>
        <Text>Calling Code:{country.idd ? `${country.idd.root}${country.idd.suffixes?.[0]}` : "N/A"}</Text>
      </SimpleGrid>

      {country.coatOfArms?.png && (
        <Stack mt={6} align="center">
          <Text fontWeight="bold">Coat of Arms:</Text>
          <Image src={country.coatOfArms.png} alt={`${country.name.common} Coat of Arms`} maxW="200px" />
        </Stack>
      )}

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
