import {
  Container,
  Box,
  Text,
  Flex,
  useColorModeValue
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  getAllCountries,
  searchCountryByName,
  filterByRegion,
  filterByLanguage
} from "../services/API";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import LanguageFilter from "../components/LangaugeFilter";
import FeaturedCountries from "../components/FeaturedCountries";
import AllCountries from "../components/AllCountries";
import LogoStyle1 from "../components/LogoStyle1";
import { FaRegHandPointer } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import PopularCountriesCarousal from "../components/PopularCountriesCarousal";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  const bgOverlay = useColorModeValue("blackAlpha.400", "blackAlpha.700");
  const cardBg = useColorModeValue("whiteAlpha.700", "gray.700");
  const highlightText = useColorModeValue("gray.700", "whiteAlpha.900");
  const iconBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.200");
  const iconHover = useColorModeValue("whiteAlpha.800", "whiteAlpha.300");
  const gradientBg = useColorModeValue("linear(to-r, whiteAlpha.700, blue.50)", "linear(to-r, gray.800, gray.700)");

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
      <Box height={{ base: "600px", md: "700px" }} position="relative" overflow="hidden">
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

        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg={bgOverlay}
          zIndex={1}
        />

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
            <Text fontSize={{ base: "sm", md: "xl" }} mt={2}>
              Discover countries by region, language, and culture
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} mt={4}>
              Learn about unique traditions, diverse populations, and hidden gems across continents.
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} mt={2}>
              Use our filters to explore specific languages and regions quickly and easily.
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} mt={2}>
              Whether you're a traveler, student, or curious mind – we've got you covered!
            </Text>
            <Box mt={6}>
              <Box
                as="button"
                bg={useColorModeValue("white", "grey")}  
                color={useColorModeValue("grey", "white")}  
                px={6}
                py={2}
                borderRadius="full"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md" }}
                _hover={{
                  bg: useColorModeValue("white", "black"), 
                  color: "white",
                }}
              >
                Start Exploring
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Hero Bottom Icons */}
        <Flex
          position="absolute"
          bottom="3px"
          left="50%"
          transform="translateX(-50%)"
          zIndex={2}
          gap={{ base: 4, md: 10 }}
          px={4}
          width="100%"
          justify="center"
        >
          {/* Click Icon */}
          <Flex align="center" gap={2}>
            <Box
              bg={iconBg}
              backdropFilter="blur(6px)"
              borderRadius="full"
              p={2}
              boxShadow="md"
              _hover={{ bg: iconHover }}
            >
              <FaRegHandPointer size={18} color="#333" />
            </Box>
            <Text color="white" mb={{ base: "2", md: "4" }} fontSize={{ base: "xs", md: "md" }} maxW="200px">
              Click to discover<br />
              interactive details
            </Text>
          </Flex>

          {/* Location Icon */}
          <Flex align="center" gap={2}>
            <Box
              bg={iconBg}
              backdropFilter="blur(6px)"
              borderRadius="full"
              p={2}
              boxShadow="md"
              _hover={{ bg: iconHover }}
            >
              <GoLocation size={18} color="#333" />
            </Box>
            <Text color="white" mb={{ base: "2", md: "4" }} fontSize={{ base: "xs", md: "md" }} maxW="200px">
              Find places by<br />
              geographical region
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* Other Components */}
      <LogoStyle1 imageSrc="/sailboat_yellow.png" />

      <PopularCountriesCarousal />

      <FeaturedCountries />

      {/* Filters Section */}
      <Box
        bgGradient={gradientBg}
        borderRadius="xl"
        boxShadow="md"
        p={6}
        mt={8}
        mx={{ base: 2, md: 4 }}
        textAlign="center"
      >
        <Text fontSize={{ base: "md", sm: "xl", md: "2xl" }} fontWeight="light" mb={{ base: 1, md: 2 }}>
          Search for Countries Worldwide
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          wrap="wrap"
          gap={{ base: 1, md: 2 }}
        >
          <Box flex="1" minW="200px" maxW="500px" mb={{ base: 1, md: 0 }}>
            <SearchBar onSearch={handleSearch} />
          </Box>
          <Box minW="150px" mb={{ base: 1, md: 0 }}>
            <RegionFilter onSelectRegion={handleRegionSelect} />
          </Box>
          <Box minW="150px" mb={{ base: 1, md: 0 }}>
            <LanguageFilter onSelectLanguage={handleLanguageSelect} />
          </Box>
        </Flex>
      </Box>

      <Box px={{ base: 3, md: 4 }}>
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
