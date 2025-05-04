import { Box, SimpleGrid, Image, Text, Spinner, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllCountriesList = ({ countries, loading, currentPage, setCurrentPage, countriesPerPage }) => {
  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(countries.length / countriesPerPage);
  const storedUser = JSON.parse(localStorage.getItem("user")) || { favorites: [] };
  const [user, setUser] = useState(storedUser);

  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  const addToFavorites = (country) => {
    if (!user.favorites) user.favorites = [];

    const alreadyFavorited = user.favorites.some(fav => fav.cca3 === country.cca3);
    if (alreadyFavorited) {
      alert(`${country.name.common} is already in your favorites.`);
      return;
    }

    user.favorites.push(country);
    localStorage.setItem("user", JSON.stringify(user));
    setUser({ ...user });

    alert(`${country.name.common} has been added to your favorites!`);
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mt={6} p={4}>
        {currentCountries.map((country) => {
          const isFavorite = user.favorites?.some(fav => fav.cca3 === country.cca3);

          return (
            <Link key={country.cca3} to={`/country/${country.cca3}`} style={{ textDecoration: "none" }}>
              <Box
                p={0}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                bg={cardBg}
                position="relative"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.02)" }}
              >
                <Box position="relative" height="180px">
                  <Image
                    src={country.flags.png}
                    alt={country.name.common}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                  <Button
                    position="absolute"
                    top="2"
                    right="2"
                    size="sm"
                    backgroundColor={isFavorite ? "#f7bf45" : "white"}
                    color="black"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToFavorites(country);
                    }}
                    _hover={{ backgroundColor: "#f7bf45" }}
                    zIndex={1}
                    borderRadius="full"
                    fontWeight="bold"
                  >
                    ★
                  </Button>
                </Box>
                <Box textAlign="left" p={4} color={textColor}>
                  <Text fontWeight="medium" fontSize="lg" mb={1}>
                    {country.name.common}
                  </Text>
                  <Text fontWeight="medium" fontSize="sm">
                    <Text as={"span"} fontWeight="light">Region:</Text> {country.region}
                  </Text>
                  <Text fontWeight="medium" fontSize="sm">
                    <Text as={"span"} fontWeight="light">Population:</Text> {country.population.toLocaleString()}
                  </Text>
                </Box>
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>

      <Flex justify="center" mt={8} gap={2} wrap="wrap">
        <Button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} isDisabled={currentPage === 1} fontSize="sm">
          Previous
        </Button>

        {currentPage > 3 && (
          <>
            <Button onClick={() => setCurrentPage(1)} fontSize="sm">1</Button>
            {currentPage > 4 && <Text fontSize="sm">...</Text>}
          </>
        )}

        {Array.from({ length: 5 }, (_, index) => {
          const page = currentPage - 2 + index;
          if (page > 0 && page <= totalPages) {
            return (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                variant={currentPage === page ? "solid" : "outline"}
                colorScheme={currentPage === page ? "blue" : "gray"}
                fontSize="sm"
              >
                {page}
              </Button>
            );
          }
          return null;
        })}

        {currentPage < totalPages - 2 && (
          <>
            <Text fontSize="sm">...</Text>
            <Button onClick={() => setCurrentPage(totalPages)} fontSize="sm">
              {totalPages}
            </Button>
          </>
        )}

        <Button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} isDisabled={currentPage === totalPages} fontSize="sm">
          Next
        </Button>
      </Flex>
    </>
  );
};

export default AllCountriesList;
