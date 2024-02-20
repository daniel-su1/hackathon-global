import Event from "./Event";
import { GET_EVENT_BY_ID } from "../graphql/queries"; 
import { useQuery } from "@apollo/client";
import LoadingSpinner from "./LoadingSpinner";
import { useAuth } from "../context/AuthContext";

function RelatedEvent({ id }) {
  const { isLoggedIn } = useAuth();
    const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
        variables: { id: id * 1.0 },
    });
    if (loading) return <LoadingSpinner/>
    if (error) return <p>Error: {error.message}</p>;
    if(data.sampleEvent.permission === "private" && !isLoggedIn) return null;
  return (
    <Event data={data.sampleEvent} />
  );
}

export default RelatedEvent;