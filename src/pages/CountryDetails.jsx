import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Image, Heading, SimpleGrid, Stack, Link } from "@chakra-ui/react";
import axios from "axios";

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
      <Heading mb={4}>{country.name.common} ({country.cca3})</Heading>
      <Image src={country.flags.png} alt={country.name.common} mb={4} borderRadius="md" maxW="200px" />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Text><b>Official Name:</b> {country.name.official}</Text>
        <Text><b>Capital:</b> {country.capital?.[0] || "N/A"}</Text>
        <Text><b>Region:</b> {country.region}</Text>
        <Text><b>Subregion:</b> {country.subregion || "N/A"}</Text>
        <Text><b>Population:</b> {country.population.toLocaleString()}</Text>
        <Text><b>Languages:</b> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</Text>
        <Text><b>Currencies:</b> {country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ") : "N/A"}</Text>
        <Text><b>Timezones:</b> {country.timezones?.join(", ")}</Text>
        <Text><b>Landlocked:</b> {country.landlocked ? "Yes" : "No"}</Text>
        <Text><b>Area:</b> {country.area.toLocaleString()} km²</Text>
        <Text><b>Top-level domain:</b> {country.tld?.join(", ")}</Text>
        <Text><b>Bordering Countries:</b> {country.borders?.join(", ") || "None"}</Text>
        <Text><b>UN Member:</b> {country.unMember ? "Yes" : "No"}</Text>
        <Text><b>Start of Week:</b> {country.startOfWeek}</Text>
        <Text><b>Calling Code:</b> {country.idd ? `${country.idd.root}${country.idd.suffixes?.[0]}` : "N/A"}</Text>
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
