import { Container, Box, Text, SimpleGrid, Image, Spinner, VStack} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getAllCountries, searchCountryByName, filterByRegion, filterByLanguage } from "../services/api";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import LanguageFilter from "../components/LangaugeFilter";
import { Link } from "react-router-dom";

const Home = () => { 

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCountries();
    }, []);

    // useEffect(() => {
    //     getAllCountries().then(res => {
    //       setCountries(res.data);
    //     }).catch(err => console.error(err));
    // }, []);

    const fetchCountries = async () => {
        setLoading(true);
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
          console.error("Search failed:", error);
          setCountries([]);
        } finally {
          setLoading(false);
        }
    };

    const handleRegionSelect = async (region) => {
        if (!region) return;
        setLoading(true);
        try {
          const response = await filterByRegion(region);
          setCountries(response.data);
        } catch (error) {
          console.error("Region filter failed:", error);
          setCountries([]);
        } finally {
          setLoading(false);
        }
    };


    const handleLanguageSelect = async (language) => {
        if (!language) return;
        setLoading(true);
        try {
          const response = await filterByLanguage(language);
          setCountries(response.data);
        } catch (error) {
          console.error("Language filter failed:", error);
          setCountries([]);
        } finally {
          setLoading(false);
        }
    };


    return (

        <Container maxW="container.xl" py={8}>
        <Text fontSize="3xl" mb={6} textAlign="center">
          🌍 Country Explorer
        </Text>
  
        <SearchBar onSearch={handleSearch} />
        <RegionFilter onSelectRegion={handleRegionSelect} />
        <LanguageFilter onSelectLanguage={handleLanguageSelect} /> {/* ✅ Added */}
  
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
                  <b>Capital:</b> {country.capital?.[0] || "N/A"}
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