import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Text,
  Tag,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  Flex,
  Square,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

function convertUnixTimestamp(timestamp) {
  // Create a new Date object from the Unix timestamp
  const date = new Date(timestamp);

  const year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, add 1 to get the correct month
  const day = String(date.getDate()).padStart(2, "0");
  let hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  let period = "AM";
  let hours12 = parseInt(hours, 10);
  if (hours12 >= 12) {
    period = "PM";
    if (hours12 > 12) {
      hours12 -= 12;
    }
  }
  hours = String(hours12).padStart(2, "0");  

  switch (month) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "Mar";
      break;
    case "04":
      month = "Apr";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "Jun";
      break;
    case "07":
      month = "Jul";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }
  // console.log(timestamp)
  return `${month} ${day}, ${year} ${hours}:${minutes} ${period}`;
}

function WindowButton() {
  return (
    <Square
      bg="rgba(255,255,255,0.6)"
      marginLeft="0.5em"
      outline="2px solid white"
      height="10px"
      width="10px"
    ></Square>
  );
}

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num) + '...';
  }
}

function Event({ data }) {
  const [isHovered, setIsHovered] = useState(false);
  let bgGradient;
  let accentGradient;
  let tagColor;

  switch (data.event_type) {
    case "workshop":
      bgGradient = "linear-gradient(90deg, rgb(23, 50, 81), rgb(43, 37, 80))";
      accentGradient = "linear-gradient(90deg, rgb(31, 166, 255), rgb(137, 107, 255))";
      tagColor = "rgba(31, 166, 255, 0.6)"
      break;
    case "activity":
      bgGradient = "linear-gradient(90deg, rgb(64, 45, 43), rgb(67, 25, 80))";
      accentGradient = "linear-gradient(90deg, rgb(240, 147, 68), rgb(255, 44, 251))";
      tagColor = "rgba(240, 147, 68, 0.6)"
      break;
    default:
      bgGradient = "linear-gradient(90deg,  rgb(21, 66, 81), rgb(22, 49, 81))";
      accentGradient = "linear-gradient(90deg, rgb(25, 251, 255), rgb(31, 166, 255))";
      tagColor = "rgba(25, 251, 255, 0.6)"
      break;
  }
    

  const hoverAnimation = {
    hover: {
      filter: "blur(20px)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    initial: {
      filter: "blur(10px)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <LinkBox
      as="article"
      maxW="20em"
      p="5"
      borderWidth="2px"
      bg={bgGradient}
      padding="0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // margin={["1em", "1em", "1em", "0"]}
      margin="1em"
    >
      <MotionBox
        zIndex="-1"
        width="100%"
        height="100%"
        position="absolute"
        bg={accentGradient}
        variants={hoverAnimation}
        animate={isHovered ? "hover" : "initial"}
      ></MotionBox>

      <Box
        bg={accentGradient}
        padding="15px"
        position="relative"
      >
        <Flex flexDir="row-reverse">
          <WindowButton />
          <WindowButton />
          <WindowButton />
        </Flex>
      </Box>
      <Box padding="1em">
        <Text fontSize="2xl" fontWeight="bold" my="2">
          <LinkOverlay as={RouterLink} to={`/events/${data.id}`}>
            {data.name}
          </LinkOverlay>
        </Text>
        <Box mb="3">
          {data.speakers.map((speaker, index) => (
            <Text fontSize="large" key={index}>{speaker.name}</Text>
          ))}
        </Box>
        <Text mb="3">{convertUnixTimestamp(data.start_time)}</Text>
        
        <Text mb="3" color="rgba(255, 255, 255, 0.6)">{truncateString(data.description, 175)}</Text>
        <Tag size="md" variant="solid" bg={tagColor} borderRadius="full">
          {data.event_type}
        </Tag>
      </Box>
    </LinkBox>
  );
}

export default Event;
