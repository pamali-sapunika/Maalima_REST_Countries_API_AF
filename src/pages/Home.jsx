import { Container, Box, Text, SimpleGrid, Spinner, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getAllCountries, searchCountryByName } from "../services/api";
import SearchBar from "../components/SearchBar";

const Home = () => { 

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await getAllCountries();
            setCountries(response.data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (searchInput) => {
        setLoading(true);
        try {
          const response = await searchCountryByName(searchInput);
          setCountries(response.data);
        } catch (error) {
          console.error("Error searching country:", error);
          setCountries([]); // If not found, set empty
        } finally {
          setLoading(false);
        }
    };

    return (

        <Container maxW={"container.sm"}>

            <Text fontSize="3xl" mb={6} textAlign="center">
                🌎 Country Explorer
            </Text>

            <SearchBar onSearch={handleSearch} />

            
            {loading ? (
                <Box textAlign="center" mt={10}>
                <Spinner size="xl" />
                </Box>
            ) : (
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mt={6}>
                {countries.map((country) => (
                    <Box
                    key={country.cca3}
                    p={4}
                    borderWidth="1px"
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ boxShadow: "xl" }}
                    textAlign="center"
                    >

                    <Image 
                        src={country.flags.png} 
                        alt={country.name.common} 
                        borderRadius="md"
                        mx="auto"
                        h="150px"
                        objectFit="cover"
                    />
                    
                    <Text fontWeight="bold" mt={2} fontSize="xl">
                        {country.name.common}
                    </Text>

                    <Text>
                        <b>Capital:</b> {country.capital ? country.capital[0] : "N/A"}
                    </Text>

                    <Text>
                        <b>Region:</b> {country.region}
                    </Text>

                    <Text>
                        <b>Population:</b> {country.population.toLocaleString()}
                    </Text>

                    <Text>
                        <b>Languages:</b>{" "}
                        {country.languages
                        ? Object.values(country.languages).join(", ")
                        : "N/A"}
                    </Text>
                    </Box>
                ))}
                </SimpleGrid>
            )}

        </Container>

    )
}

export default Home