// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Box, Heading, Text, Image, Spinner, Stack } from "@chakra-ui/react";
// import { getCountryByCode } from "../api";

// const CountryDetail = () => {
//   const { code } = useParams();
//   const [country, setCountry] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getCountryByCode(code)
//       .then((res) => {
//         setCountry(res.data[0]);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching country:", err);
//         setLoading(false);
//       });
//   }, [code]);

//   if (loading) return <Spinner size="xl" />;

//   if (!country) return <Text>Country not found.</Text>;

//   return (
//     <Box p={4}>
//       <Heading mb={4}>{country.name.common}</Heading>
//       <Image src={country.flags.png} alt={`Flag of ${country.name.common}`} maxW="300px" mb={4} />
//       <Stack spacing={2}>
//         <Text><strong>Official Name:</strong> {country.name.official}</Text>
//         <Text><strong>Capital:</strong> {country.capital?.[0]}</Text>
//         <Text><strong>Region:</strong> {country.region}</Text>
//         <Text><strong>Subregion:</strong> {country.subregion}</Text>
//         <Text><strong>Population:</strong> {country.population.toLocaleString()}</Text>
//         <Text><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</Text>
//         <Text><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => `${c.name} (${c.symbol})`).join(", ")}</Text>
//       </Stack>
//     </Box>
//   );
// };

// export default CountryDetail;
