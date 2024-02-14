import { Box, Flex, Text, Stack, Radio } from "@chakra-ui/react";
import WindowButton from "./WindowButton";

function ApplyFilters({ sortPreference, setSortPreference }) {
  const handleSortChange = (sort) => () => {
    setSortPreference(sort);
    localStorage.setItem("sortPreference", sort);
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
          Sort By
        </Text>
        <Stack spacing={3} direction="column">
          <Radio
            colorScheme="black"
            color={"white"}
            isChecked={sortPreference === "start_time"}
            onChange={handleSortChange("start_time")}
          >
            <Text>Date</Text>
          </Radio>
          <Radio
            color="rgba(255, 255, 255, 1)"
            isChecked={sortPreference === "name"}
            onChange={handleSortChange("name")}
          >
            <Text>Name</Text>
          </Radio>
        </Stack>
      </Box>
    </Box>
  );
}

export default ApplyFilters;
