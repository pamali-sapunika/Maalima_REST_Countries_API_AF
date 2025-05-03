import { Container, Box, Text, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getAllCountries, searchCountryByName, filterByRegion, filterByLanguage } from "../services/api";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import LanguageFilter from "../components/LangaugeFilter";
import FeaturedCountries from "../components/FeaturedCountries";
import AllCountries from "../components/AllCountries";
import LogoStyle1 from "../components/LogoStyle1";
import Footer from "../components/Footer";

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
    <Container maxW="container.xxl" px={0} bg="red.50">
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

        <LogoStyle1 imageSrc="/sailboat_yellow.png"/>

        <FeaturedCountries />
    
        <Box
            bgGradient="linear(to-r, whiteAlpha.700, blue.50)"
            borderRadius="xl"
            boxShadow="md"
            p={6}
            mt={8}
            mx={4}
            textAlign="center"
            >
            <Text fontSize="25px" fontWeight="light" mb={4}>
                Search for Countries Worldwide
            </Text>
            <Flex justify="center" wrap="wrap" gap={4}>
                <Box flex="1" minW="200px" maxW="500px">
                <SearchBar onSearch={handleSearch} />
                </Box>
                <Box minW="150px">
                <RegionFilter onSelectRegion={handleRegionSelect} />
                </Box>
                <Box minW="150px">
                <LanguageFilter onSelectLanguage={handleLanguageSelect} />
                </Box>
            </Flex>
        </Box>
    
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
