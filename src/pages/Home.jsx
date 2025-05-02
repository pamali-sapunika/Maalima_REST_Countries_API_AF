import { Container, Box, Text, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getAllCountries, searchCountryByName, filterByRegion, filterByLanguage } from "../services/api";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import LanguageFilter from "../components/LangaugeFilter";
import FeaturedCountries from "../components/FeaturedCountries";
import AllCountries from "../components/AllCountries";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  useEffect(() => {
    fetchCountries();
  }, []);

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
    <Container maxW="container.xxl" px={0}>
        {/* Hero Section */}
        <Box
            height={{ base: "500px", md: "700px" }}
            backgroundImage= "url('/bg1.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            color="white"
            textAlign="center"
            px={4}
        >
            <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
            Explore the World
            </Text>
            <Text fontSize={{ base: "md", md: "xl" }} mt={2}>
            Discover countries by region, language, and culture
            </Text>
        </Box>
    
        <Text fontSize="3xl" my={6} textAlign="center">
            Country Explorer
        </Text>

        <Box
            bgGradient="linear(to-r, teal.100, blue.100)"
            borderRadius="xl"
            boxShadow="md"
            p={6}
            mb={8}
        >
            <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
            🌟 Featured Countries
            </Text>
            <FeaturedCountries />
        </Box>
    
        <Flex justify="space-between" mb={6} wrap="wrap" gap={4} px={4}>
            <Box flex="1" minW="200px">
            <SearchBar onSearch={handleSearch} />
            </Box>
            <Box minW="150px">
            <RegionFilter onSelectRegion={handleRegionSelect} />
            </Box>
            <Box minW="150px">
            <LanguageFilter onSelectLanguage={handleLanguageSelect} />
            </Box>
        </Flex>
    
        <Box px={4}>
            <AllCountries
            countries={countries}
            loading={loading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            countriesPerPage={countriesPerPage}
            />
        </Box>
    </Container>
  );
}  

export default Home;
