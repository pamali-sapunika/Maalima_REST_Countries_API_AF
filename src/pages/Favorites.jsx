import { useEffect, useState } from "react";
import { Box, Text, SimpleGrid, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const bgImage = "url('https://images.pexels.com/photos/3551863/pexels-photo-3551863.jpeg')"; // Your background image URL
    const bgImageStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        filter: "blur(8px)", // Apply blur effect
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    // Fetch favorites from localStorage
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user")) || { favorites: [] };
        setFavorites(storedUser.favorites);
    }, []);

    // Update the favorites in localStorage whenever they change
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user")) || { favorites: [] };
        user.favorites = favorites;
        localStorage.setItem("user", JSON.stringify(user)); // Store updated user data in localStorage
    }, [favorites]);

    return (
        <Box position="relative" p={4} minH="100vh">
            {/* Background Image */}
            <Box style={bgImageStyle} bgImage={bgImage} />
            <Text fontSize="2xl" fontWeight="bold" mb={4} color="white" textAlign="center">
                My Favorite Countries
            </Text>
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
                            backgroundColor="rgba(255, 255, 255, 0.7)" // Semi-transparent background
                            backdropFilter="blur(5px)" // Optional, adds blur effect behind the card
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
                <Text color="white" textAlign="center">No favorite countries added yet.</Text>
            )}
        </Box>
    );
};

export default Favorites;
