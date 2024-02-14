import { useQuery } from "@apollo/client";
import { SAMPLE_EVENTS_QUERY } from "../graphql/queries";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { Box, Center, Input, Text, Flex } from "@chakra-ui/react";
import Event from "../components/Event";
import ApplyFilters from "../components/ApplyFilters";

function EventList() {
  const { loading, error, data } = useQuery(SAMPLE_EVENTS_QUERY);
  const { isLoggedIn } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    workshop: false,
    activity: false,
    tech_talk: false,
  });
  const [sortPreference, setSortPreference] = useState("start_time");

  useEffect(() => {
    const storedFilters = JSON.parse(localStorage.getItem("filters"));
    if (storedFilters) setFilters(storedFilters);
    const storedSortPreference = localStorage.getItem("sortPreference");
    if (storedSortPreference) setSortPreference(storedSortPreference);
    console.log("retrieved from local storage");
  }, []);

  function handleSortChange(sort) {
    setSortPreference(sort);
    localStorage.setItem("sortPreference", sort);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  // console.log(data.sampleEvents);

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
    <Center>
      <Box width="60em">
        <Text fontSize="3xl">Events</Text>
        <Input
          type="text"
          placeholder="Search events.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          border={"2px solid white"}
          borderRadius="0px"
          
        ></Input>

        <div>
          <div>
            <label>
              <input
                type="radio"
                name="sortPreference"
                value="start_time"
                checked={sortPreference === "start_time"}
                onChange={() => handleSortChange("start_time")}
                
              />
              Start Time
            </label>
            <label>
              <input
                type="radio"
                name="sortPreference"
                value="name"
                checked={sortPreference === "name"}
                onChange={() => handleSortChange("name")}
              />
              Name
            </label>
          </div>
          {/* Search input and event list rendering */}
        </div>
        <Flex flexDirection="row" alignItems="flex-start">
        <ApplyFilters filters={filters} setFilters={setFilters} />
          <Flex flexDirection="row" flexWrap="wrap">
            {sortedEvents.map((sampleEvent) => (
              <Event data={sampleEvent} key={sampleEvent.id} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}

export default EventList;
