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
import { convertUnixTimestamp } from "../utils/convertUnixTimestamp";
import { truncateString } from "../utils/truncateString";

const MotionBox = motion(Box);

function Event({ data, setFilters }) {
  const [isHovered, setIsHovered] = useState(false);
  let bgGradient;
  let accentGradient;
  let tagOriginalColor;
  let eventType;

  const handleTagClick = (e, eventType) => {
    e.stopPropagation(); // Prevent click from propagating to the LinkBox
    setFilters((prevFilters) => ({
      ...prevFilters,
      [eventType]: !prevFilters[eventType],
    }));
  };

  switch (data.event_type) {
    case "workshop":
      bgGradient = "linear-gradient(90deg, rgb(23, 50, 81), rgb(43, 37, 80))";
      accentGradient =
        "linear-gradient(90deg, rgb(31, 166, 255), rgb(137, 107, 255))";
      tagOriginalColor = "rgba(31, 166, 255, 0.6)";
      break;
    case "activity":
      bgGradient = "linear-gradient(90deg, rgb(64, 45, 43), rgb(67, 25, 80))";
      accentGradient =
        "linear-gradient(90deg, rgb(240, 147, 68), rgb(255, 44, 251))";
      tagOriginalColor = "rgba(240, 147, 68, 0.6)";
      break;
    default:
      bgGradient = "linear-gradient(90deg,  rgb(21, 66, 81), rgb(22, 49, 81))";
      accentGradient =
        "linear-gradient(90deg, rgb(25, 251, 255), rgb(31, 166, 255))";
      tagOriginalColor = "rgba(25, 251, 255, 0.6)";
      break;
  }
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
        <Text mb="3">{convertUnixTimestamp(data.start_time)}</Text>

        <Text mb="3" color="rgba(255, 255, 255, 0.6)">
          {truncateString(data.description, 175)}
        </Text>
        <Tag
          size="md"
          variant="solid"
          bg={tagOriginalColor}
          borderRadius="full"
        >
          {eventType}
        </Tag>
      </Box>
    </LinkBox>
  );
}

export default Event;
