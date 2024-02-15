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
import WindowButton from "./WindowButton";
import {formatDate, formatTime} from "../utils/convertUnixTimestamp";
import truncateString from "../utils/truncateString";

const MotionBox = motion(Box);

function Event({ data, setFilters }) {
  const [isHovered, setIsHovered] = useState(false);
  let bgGradient;
  let accentGradient;
  let tagColor;
  let startingColor;
  let endingColor;
  let eventType;

  switch (data.event_type) {
    case "workshop":
      bgGradient = "linear-gradient(90deg, rgb(23, 50, 81), rgb(43, 37, 80))";
      startingColor = "rgb(31, 166, 255)";
      endingColor = "rgb(137, 107, 255)";
      tagColor = "rgba(31, 166, 255, 0.6)";
      break;
    case "activity":
      bgGradient = "linear-gradient(90deg, rgb(64, 45, 43), rgb(67, 25, 80))";
      startingColor = "rgb(240, 147, 68)";
      endingColor = "rgb(255, 44, 251)";
      tagColor = "rgba(240, 147, 68, 0.6)";
      break;
    default:
      bgGradient = "linear-gradient(90deg,  rgb(63, 57, 48), rgb(42, 65, 80))";
      startingColor = "rgb(247, 206, 88)";
      endingColor = "rgb(25, 251, 255)";
      tagColor = "rgba(247, 206, 88, 0.6)";
      break;
  }
  accentGradient = `linear-gradient(90deg, ${startingColor}, ${endingColor})`;
  switch (data.event_type) {
    case "workshop":
      eventType = "Workshop";
      break;
    case "activity":
      eventType = "Activity";
      break;
    default:
      eventType = "Tech Talk";
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
      margin="1em"
      id={data.id}
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

      <Box bg={accentGradient} padding="15px" position="relative">
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
            <Text fontSize="large" key={index}>
              {speaker.name}
            </Text>
          ))}
        </Box>
        <Text mb="3">{formatDate(data.start_time) + " " + formatTime(data.start_time) + " - " + formatTime(data.end_time)}</Text>

        <Text mb="3" color="rgba(255, 255, 255, 0.6)">
          {truncateString(data.description, 175)}
        </Text>
        <Tag
          size="md"
          variant="solid"
          bg={tagColor}
          borderRadius="full"
        >
          {eventType}
        </Tag>
      </Box>
    </LinkBox>
  );
}

export default Event;
