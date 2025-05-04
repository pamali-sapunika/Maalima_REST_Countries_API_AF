import { Box, SimpleGrid, Image, Text, Spinner, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AllCountriesList = ({ countries, loading, currentPage, setCurrentPage, countriesPerPage }) => {
    const indexOfLast = currentPage * countriesPerPage;
    const indexOfFirst = indexOfLast - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(countries.length / countriesPerPage);
    
    // Retrieve user data from localStorage and initialize favorites if not already defined
    const storedUser = JSON.parse(localStorage.getItem('user')) || { favorites: [] };
    console.log(storedUser);
console.log(storedUser.favorites);
    
    // Set up state to store user data
    const [user, setUser] = useState(storedUser);

    const addToFavorites = (country) => {
        // Ensure favorites is initialized as an array if not already
        if (!user.favorites) {
            user.favorites = [];
        }
    
        // Add the country to the favorites
        user.favorites.push(country.name);
    
        // Store the updated user object back to localStorage
        localStorage.setItem('user', JSON.stringify(user));
    
        // Update the user state to trigger a re-render
        setUser({ ...user });
    
        // Alert to confirm the country was added to favorites
        alert(`${country.name} has been added to your favorites!`);
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
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mt={6}>
                {currentCountries.map((country) => {
                    // Check if the country is already in the favorites list
                    const isFavorite = user.favorites?.includes(country.name.common) || false;

                    return (
                        <Link
                            key={country.cca3} // Move key here!
                            to={`/country/${country.cca3}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Box
                                p={4}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="md"
                                textAlign="center"
                                _hover={{ boxShadow: "xl", cursor: "pointer", transform: "scale(1.02)" }}
                                transition="all 0.2s"
                                backgroundColor={"white"}
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

                                <Text><b>Capital:</b> {country.capital?.[0] || "N/A"}</Text>
                                <Text><b>Region:</b> {country.region}</Text>
                                <Text><b>Population:</b> {country.population.toLocaleString()}</Text>
                                <Text>
                                    <b>Languages:</b>{" "}
                                    {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
                                </Text>

                                {/* Button to add country to favorites */}
                                <Button
                                    onClick={() => addToFavorites(country)}
                                    colorScheme={isFavorite ? "green" : "teal"}
                                    isDisabled={isFavorite}
                                >
                                    {isFavorite ? "Favorited" : "Add to Favorites"}
                                </Button>
                            </Box>
                        </Link>
                    );
                })}
            </SimpleGrid>

            {/* Pagination */}
            <Flex justify="center" mt={8} gap={2} wrap="wrap">
                <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} isDisabled={currentPage === 1}>
                    Previous
                </Button>

                {currentPage > 3 && (
                    <>
                        <Button onClick={() => setCurrentPage(1)}>1</Button>
                        {currentPage > 4 && <Text>...</Text>}
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
                            >
                                {page}
                            </Button>
                        );
                    }
                    return null;
                })}

                {currentPage < totalPages - 2 && (
                    <>
                        <Text>...</Text>
                        <Button onClick={() => setCurrentPage(totalPages)}>{totalPages}</Button>
                    </>
                )}

                <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} isDisabled={currentPage === totalPages}>
                    Next
                </Button>
            </Flex>
        </>
    );
};

export default AllCountriesList;
