import { Link } from "react-router-dom";

function convertUnixTimestamp(timestamp) {
    // Create a new Date object from the Unix timestamp
    const date = new Date(timestamp);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, add 1 to get the correct month
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    // console.log(timestamp)
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

function Event({data}) {
    // console.log(data)
  return (
    
      <div key={data.id}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        {data.speakers.map((speaker) => {
            // console.log(speaker)
            return <p>{speaker.name}</p>
        })}
        <p>{convertUnixTimestamp(data.start_time)}</p>
        <span>{data.event_type}</span>

        <Link to={`${data.id}`}>View Event</Link>
      </div>

  );
}

export default Event;
