import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Spinner,
  Heading,
  Text,
  Image,
  VStack,
  Stack,
} from "@chakra-ui/react";

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get(`https://restcountries.com/v2/alpha/${code}`);
        setCountry(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching country:", err);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  if (loading) return <Spinner size="xl" mt={20} />;

  if (!country) return <Text>Country not found.</Text>;

  return (
    <Box p={8}>
      <Stack direction={{ base: "column", md: "row" }} spacing={8}>
        <Image src={country.flag} alt={country.name} maxW="300px" />
        <VStack align="start" spacing={2}>
          <Heading>{country.name}</Heading>
          <Text><b>Native Name:</b> {country.nativeName}</Text>
          <Text><b>Capital:</b> {country.capital}</Text>
          <Text><b>Region:</b> {country.region}</Text>
          <Text><b>Subregion:</b> {country.subregion}</Text>
          <Text><b>Population:</b> {country.population.toLocaleString()}</Text>
          <Text><b>Languages:</b> {country.languages.map(l => l.name).join(", ")}</Text>
          <Text><b>Currencies:</b> {country.currencies.map(c => `${c.name} (${c.symbol})`).join(", ")}</Text>
          <Text><b>Timezones:</b> {country.timezones.join(", ")}</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default CountryDetails;
