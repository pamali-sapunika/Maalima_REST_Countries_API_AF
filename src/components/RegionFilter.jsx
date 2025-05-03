import { Select, Container } from "@chakra-ui/react";

const RegionFilter = ({ onSelectRegion }) => {
  return (
    <Container maxW="container.xl" mt={4}>
      <Select placeholder="Filter by region" onChange={(e) => onSelectRegion(e.target.value)}>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </Container>
  );
};

export default RegionFilter;
