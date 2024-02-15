import { Box, LinkBox, Flex, Text, Stack, Checkbox } from "@chakra-ui/react";
import WindowButton from "./WindowButton";

function ApplyFilters({ filters, setFilters }) {
  const handleFilterChange = (filter) => () => {
    const updatedFilters = { ...filters, [filter]: !filters[filter] };
    localStorage.setItem("filters", JSON.stringify(updatedFilters));
    setFilters(updatedFilters);
  };

  return (
    <Box
      as="article"
      width="auto"
      p="5"
      borderWidth="2px"
      bg={
        "linear-gradient(90deg, rgb(255, 255, 255, 0.2), rgb(150, 150, 150, 0.2))"
      }
      padding="0"
      margin="1em"
    >
      <Box
        bg={"linear-gradient(90deg, rgb(150, 150, 150), rgb(80, 80, 80))"}
        padding="15px"
        position="relative"
      >
        <Flex flexDir="row-reverse">
          <WindowButton />
        </Flex>
      </Box>
      <Box padding="1em">
        <Text fontSize="xl" color="white" mb={3}>
          Filter By
        </Text>
        <Stack spacing={3} direction="column">
          <Checkbox
            colorScheme="blue"
            color={"white"}
            isChecked={filters.workshop}
            onChange={handleFilterChange("workshop")}
          >
            <Text>Workshop</Text>
          </Checkbox>
          <Checkbox
            colorScheme="orange"
            color={"white"}
            isChecked={filters.activity}
            onChange={handleFilterChange("activity")}
          >
            <Text>Activity</Text>
          </Checkbox>
          <Checkbox
            colorScheme="yellow"
            color={"white"}
            isChecked={filters.tech_talk}
            onChange={handleFilterChange("tech_talk")}
          >
            <Text>Tech Talk</Text>
          </Checkbox>
        </Stack>
      </Box>
    </Box>
  );
}

export default ApplyFilters;
