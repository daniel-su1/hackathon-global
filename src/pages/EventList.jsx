import { useQuery } from "@apollo/client";
import { SAMPLE_EVENTS_QUERY } from "../graphql/queries";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { Box, Center, Input, Text, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Event from "../components/Event";
import ApplyFilters from "../components/ApplyFilters";
import SortBy from "../components/SortBy";
import LoadingSpinner from "../components/LoadingSpinner";

function EventList() {
  const { loading, error, data } = useQuery(SAMPLE_EVENTS_QUERY);
  const { isLoggedIn } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    workshop: false,
    activity: false,
    tech_talk: false,
    saved: false,
  });
  const [sortPreference, setSortPreference] = useState("start_time");
  const [isFocused, setIsFocused] = useState(false);
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    const storedFilters = JSON.parse(localStorage.getItem("filters"));
    if (storedFilters) setFilters(storedFilters);
    const storedSortPreference = localStorage.getItem("sortPreference");
    if (storedSortPreference) setSortPreference(storedSortPreference);
    const saved = JSON.parse(localStorage.getItem("savedEvents"));
    if (saved) setSavedEvents(saved);
    if (!isLoggedIn) setFilters({ ...filters, saved: false });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error :</p>;

  let sortedEvents = data.sampleEvents
    .filter(
      (event) =>
        (event.permission === "public" ||
          (event.permission === "private" && isLoggedIn)) &&
        (event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase())) // Filter based on search query
    )
    .filter((event) => {
      if (filters.workshop && event.event_type === "workshop") return true;

      if (filters.activity && event.event_type === "activity") return true;
      if (filters.tech_talk && event.event_type === "tech_talk") return true;
      if (filters.saved) {
        return savedEvents.includes(event.id.toString());
      }
      if (!filters.workshop && !filters.activity && !filters.tech_talk)
        return true;
      return false;
    })
    .sort((a, b) => {
      if (sortPreference === "start_time") {
        return new Date(a.start_time) - new Date(b.start_time);
      } else if (sortPreference === "name") {
        return a.name.localeCompare(b.name);
      }
    });

  return (
    <Center px={8}>
      <Flex width="60em" flexDir="column">
        <Text
          fontSize={{ base: "30pt", sm: "40pt", md: "50pt", lg: "60pt" }}
          fontWeight="500"
          mb={5}
        >
          Events
        </Text>
        <motion.div
          initial={{ width: "50%" }} // Initial width
          animate={{ width: isFocused ? "85%" : "50%" }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <Input
            as={motion.input}
            type="text"
            placeholder="Search events.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            border={"2px solid white"}
            borderRadius="0px"
            mb={3}
            ml={4}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            bg="gray.200"
            textColor={"black"}
          ></Input>
          <Box>
            
          </Box>
        </motion.div>
        <Flex
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          alignItems="flex-start"
        >
          <Flex
            flexDirection={{ base: "row", md: "column" }}
            width={{ base: "100%", md: "10em" }}
          >
            <Box width={{base: "50%", md:"auto"}}>
              <ApplyFilters filters={filters} setFilters={setFilters} />
            </Box>
            <Box width={{base: "50%", md:"auto"}}>
            <SortBy
              sortPreference={sortPreference}
              setSortPreference={setSortPreference}
            />
            </Box>
            
          </Flex>
          <AnimatePresence>
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              m="auto"
              as={motion.div}
              layout
            >
              {sortedEvents.map((sampleEvent) => (
                <motion.div
                  key={sampleEvent.id}
                  layout
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Event data={sampleEvent} key={sampleEvent.id} />
                </motion.div>
              ))}
            </Flex>
          </AnimatePresence>
        </Flex>
      </Flex>
    </Center>
  );
}

export default EventList;
