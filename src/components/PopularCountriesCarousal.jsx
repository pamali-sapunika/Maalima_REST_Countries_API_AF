import React from "react";
import PopularCountries from "./PopularCountries";

const fixedImages = [
  {
    url: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "London",
    region: "United Kindom",
  },
  {
    url: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Santorini",
    region: "Greece",
  },
  {
    url: "https://images.pexels.com/photos/31912675/pexels-photo-31912675/free-photo-of-red-train-at-anuradhapura-railway-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Sri Lanka",
    region: "Asia",
  },
  {
    url: "https://images.pexels.com/photos/28353799/pexels-photo-28353799/free-photo-of-an-elephant-with-tusks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "South Africa",
    region: "Africa",
  },
  {
    url: "https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Sydney",
    region: "Australia",
  },
];

const PopularCountriesCarousal = () => {
  return <PopularCountries title="Popular Countries" images={fixedImages} fontSize={{ base: "sm", md: "15px", lg:"15px" }}/>;
};

export default PopularCountriesCarousal;
