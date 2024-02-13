
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_EVENT_BY_ID } from '../graphql/queries'; // Adjust the path as needed

function EventDetails() {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: { id: id * 1.0 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.sampleEvent.name}</h1>
      {/* Display more event details */}
    </div>
  );
}

export default EventDetails;
