import React from "react";
import {
  Box,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import '../app.css'

const PopularCountries = ({ title = "Featured Views", description = "Explore top countries based on different regions and preferences.", images }) => {
  const isCarouselView = useBreakpointValue({ base: true, md: true, lg: true });
  
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

  return (
    <Box
        mt={10}
        px={4}
        py={4}
        borderRadius="xl"
        boxShadow="lg"
    >
        {/* Title Section */}
        <Box mb={4}>
            <Text
            textAlign="left"
            fontSize={{ base: "22px", md: "25px", lg: "30px" }}
            fontWeight="medium"
            >
            {title}
            </Text>

            {/* Description below the title */}
            <Text
            textAlign="left"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="light"
            >
            {description}
            </Text>
        </Box>

        {/* Carousel Section */}
        <Box
            borderRadius="xl"
            padding={2}
        >
            {isCarouselView ? (
            <Slider {...carouselSettings}>
                {images.map((img, idx) => (
                <Box key={idx} px={2} position="relative" >
                    <img
                    src={img.url}
                    alt={img.label || `Image ${idx + 1}`}
                    style={{
                        borderRadius: "12px", 
                        objectFit: "cover",
                        height: "600px", 
                        width: "100%",
                    }}
                    />
                    {img.label && (
                    <Box
                        position="absolute"
                        bottom="10px"
                        left="10px"
                        color="white"
                        fontWeight="light"
                        ml={{ base: "4", md: "6" }}
                        fontSize={{ base: "sm", md: "15px" }}
                        textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
                    >
                        <Text fontWeight={"medium"}>{img.label}</Text>
                        <Text>{img.region}</Text>
                    </Box>
                    )}
                </Box>
                ))}
            </Slider>
            ) : (
            <Text textAlign="center" color="gray.600">
                Carousel not supported on this view.
            </Text>
            )}
        </Box>
    </Box>
  );
};

export default PopularCountries;
