import { Button, Container, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      onSearch(searchInput.trim());
    }
  };

  return (
    <Container maxW="container.xl" mt={4}>
      <form onSubmit={handleSearch}>
        <Flex gap={2}>
          <Input
            placeholder="Search for a country..."
            value={searchInput}
            onChange={handleInputChange}
            backgroundColor="white"
            width="100%"
          />
          <Button colorScheme="blue" type="submit">
            Search
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default SearchBar;
