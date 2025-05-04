import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Spinner,
  Image,
  Heading,
  VStack,
  SimpleGrid,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import Slider from "react-slick";
import LogoStyle1 from "./LogoStyle1";
import OvelCard from "./OvelCard";

const FeaturedCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isCarouselView = useBreakpointValue({ base: true, md: true, lg: false });

  
  useEffect(() => {
    const fetchRandomCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");

        const selected = new Set();
        const randomCountries = [];

        while (randomCountries.length < 5) {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          const country = response.data[randomIndex];
          if (!selected.has(country.cca3)) {
            selected.add(country.cca3);
            randomCountries.push({
              name: country.name.common,
              flag: country.flags.png,
              cca3: country.cca3,
              capital: country.capital?.[0] || "N/A",
              region: country.region || "N/A",
            });
          }
        }

        setCountries(randomCountries);
      } catch (err) {
        setError("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    };

    fetchRandomCountries();
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  const renderOvalCard = (country) => (
    <VStack
      key={country.cca3}
      spacing={4}
      bg="whiteAlpha.800"
      p={4}
      borderRadius="xl"
      boxShadow="xl"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
    >
      <Box
        width="150px"
        height="150px"
        borderRadius="full"
        overflow="hidden"
        boxShadow="md"
        border="2px solid #f7bf45"
      >
        <Image
          src={country.flag}
          alt={`Flag of ${country.name}`}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Heading size="sm" color="gray.700">{country.name}</Heading>
      <Text fontSize="sm" color="gray.600"><strong>Capital:</strong> {country.capital}</Text>
      <Text fontSize="sm" color="gray.600"><strong>Region:</strong> {country.region}</Text>
    </VStack>
  );
  
  return (
    <Box mt={10} px={4} py={10}>
      <Box mb={6} textAlign="center">
        <LogoStyle1 imageSrc={"./sailboat_yellow.png"} />
        <Text fontSize={{ base: "22px", md: "25px", lg: "30px" }} fontWeight="medium" >
          Countries of the Day
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="light" >
          Discover randomly featured countries around the globe.
        </Text>
      </Box>

      <Box  borderRadius="xl" p={6} boxShadow="lg">
        {loading ? (
            <Spinner size="xl" />
          ) : error ? (
            <Text color="red.500">{error}</Text>
          ) : isCarouselView ? (
            <Slider {...carouselSettings}>
              {countries.map((country) => (
                <Box key={country.cca3}>
                  <OvelCard country={country} />
                </Box>
              ))}
            </Slider>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={6}>
              {countries.map((country) => (
                <OvelCard key={country.cca3} country={country} />
              ))}
            </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default FeaturedCountries;
