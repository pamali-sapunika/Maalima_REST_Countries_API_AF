import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Image, Heading } from "@chakra-ui/react";
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
    <Box maxW="xl" mx="auto" mt={10} p={6} boxShadow="lg" borderRadius="lg" bg="gray.50">
      <Heading mb={4}>{country.name.common}</Heading>
      <Image src={country.flags.png} alt={country.name.common} mb={4} borderRadius="md" />
      <Text><b>Capital:</b> {country.capital?.[0] || "N/A"}</Text>
      <Text><b>Region:</b> {country.region}</Text>
      <Text><b>Population:</b> {country.population.toLocaleString()}</Text>
      <Text><b>Languages:</b> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</Text>
      <Text><b>Timezones:</b> {country.timezones?.join(", ")}</Text>
    </Box>
  );
};

export default CountryDetails;
