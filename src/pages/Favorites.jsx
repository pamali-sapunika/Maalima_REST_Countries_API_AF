import { useEffect, useState } from "react";
import { Box, Text, SimpleGrid, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user")) || { favorites: [] };
        setFavorites(storedUser.favorites);
    }, []);

    return (
        <Box p={4}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>My Favorite Countries</Text>
            {favorites.length > 0 ? (
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                    {favorites.map((country, index) => (
                        <Box
                            key={index}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            boxShadow="md"
                            textAlign="center"
                            backgroundColor="white"
                        >
                            <Image
                                src={country.flags?.png || "./bg1.jpg"}
                                alt={country.name?.common}
                                borderRadius="md"
                                mx="auto"
                                h="150px"
                                objectFit="cover"
                            />
                            <Text fontWeight="bold" mt={2} fontSize="xl">
                                {country.name?.common}
                            </Text>
                            <Text><b>Capital:</b> {country.capital?.[0] || "N/A"}</Text>
                            <Text><b>Region:</b> {country.region}</Text>
                            <Text><b>Population:</b> {country.population ? country.population.toLocaleString() : "N/A"}</Text>
                            <Text>
                                <b>Languages:</b>{" "}
                                {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
                            </Text>
                            <Link to={`/country/${country.cca3}`}>
                                <Button colorScheme="teal" mt={2}>View Details</Button>
                            </Link>
                        </Box>
                    ))}
                </SimpleGrid>
            ) : (
                <Text>No favorite countries added yet.</Text>
            )}
        </Box>
    );
};

export default Favorites;
