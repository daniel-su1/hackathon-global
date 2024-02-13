import { useQuery } from "@apollo/client";
import { SAMPLE_EVENTS_QUERY } from "../graphql/queries";
import { Link } from "react-router-dom";
import Event from "../components/Event";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

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

  // useEffect(() => {
  //   localStorage.setItem("sortPreference", sortPreference);
  //   console.log("stored sort in local storage");
  // }, [sortPreference]);

  // useEffect(() => {
  //   localStorage.setItem("filters", JSON.stringify(filters));
  //   console.log("stored filters in local storage");
  // }, [filters]);

  function handleFilterChange(filter) {
    const updatedFilters = { ...filters, [filter]: !filters[filter] };
    setFilters(updatedFilters);
    localStorage.setItem("filters", JSON.stringify(updatedFilters));
  }
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
    <div>
      <h1>Events</h1>
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <div>
        <h1>Events</h1>
        <div>
          <label>
            <input
              type="checkbox"
              checked={filters.workshop}
              onChange={() =>
                handleFilterChange("workshop")
              }
            />
            Workshop
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.activity}
              onChange={() => handleFilterChange("activity")}
            />
            Activity
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.tech_talk}
              onChange={() =>
                handleFilterChange("tech_talk")
              }
            />
            Tech Talk
          </label>
        </div>
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

      {sortedEvents.map((sampleEvent) => (
        <Event data={sampleEvent} key={sampleEvent.id} />
      ))}
    </div>
  );
}

export default EventList;
