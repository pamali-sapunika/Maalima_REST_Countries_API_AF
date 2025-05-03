import { Container, Box, Text, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getAllCountries, searchCountryByName, filterByRegion, filterByLanguage } from "../services/api";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import LanguageFilter from "../components/LangaugeFilter";
import FeaturedCountries from "../components/FeaturedCountries";
import AllCountries from "../components/AllCountries";
import LogoStyle1 from "../components/LogoStyle1";
import { FaRegHandPointer } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

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
      <Box height={{ base: "auto", md: "700px" }} position="relative" overflow="hidden">
        <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            backgroundImage="url('/bg1.jpg')"
            backgroundSize="cover"
            backgroundPosition="center top"
            filter="blur(3px)"
            zIndex={0}
        />

        {/* Black overlay */}
        <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="blackAlpha.400"
            zIndex={1}
        />

        {/* Text content */}
        <Box
            position="relative"
            zIndex={2}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            height="100%"
            px={{ base: 4, md: 20 }}
            py={10}
            color="white"
            textAlign="left"
        >
            <Box maxW="600px">
                <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
                    Explore the World
                </Text>
                <Text fontSize={{ base: "md", md: "xl" }} mt={2}>
                    Discover countries by region, language, and culture
                </Text>
                <Text fontSize="md" mt={4}>
                    Learn about unique traditions, diverse populations, and hidden gems across continents.
                </Text>
                <Text fontSize="md" mt={2}>
                    Use our filters to explore specific languages and regions quickly and easily.
                </Text>
                <Text fontSize="md" mt={2}>
                    Whether you're a traveler, student, or curious mind – we've got you covered!
                </Text>
                <Box mt={6}>
                    <Box
                    as="button"
                    bg="white"
                    color="grey"
                    px={6}
                    py={2}
                    borderRadius="full"
                    fontWeight="bold"
                    _hover={{ bg: "grey", color: "white" }}
                    >
                    Start Exploring
                    </Box>
                </Box>
            </Box>
        </Box>

            <Flex
            position="absolute"
            bottom="30px"
            left="50%"
            transform="translateX(-50%)"
            zIndex={2}
            gap={10}
            >
            {/* Click Icon Block */}
                <Flex align="center" gap={3}>
                    <Box
                        bg="whiteAlpha.600"
                        backdropFilter="blur(8px)"
                        borderRadius="full"
                        p={3}
                        boxShadow="lg"
                        _hover={{ bg: "whiteAlpha.800" }}
                        >
                        <FaRegHandPointer size={24} color="#333" />
                    </Box>
                    <Text color="white" fontSize="sm">
                    Click to discover<br />
                    interactive details
                    </Text>
                </Flex>

                {/* Location Icon Block */}
                <Flex align="center" gap={3}>
                    <Box
                        bg="whiteAlpha.600"
                        backdropFilter="blur(8px)"
                        borderRadius="full"
                        p={3}
                        boxShadow="lg"
                        _hover={{ bg: "whiteAlpha.800" }}
                        >
                        <GoLocation size={24} color="#333" />
                    </Box>
                    <Text color="white" fontSize="sm">
                    Find places by<br />
                    geographical region
                    </Text>
                </Flex>
            </Flex>
        </Box>

        <LogoStyle1 imageSrc="/sailboat_yellow.png" />

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
};

export default Home;
