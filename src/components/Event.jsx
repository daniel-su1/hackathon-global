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
import getColorScheme from "../utils/colorManagement";

const MotionBox = motion(Box);

function Event({ data, setFilters }) {
  const [isHovered, setIsHovered] = useState(false);
  const { bgGradient, accentGradient, tagColor, eventType } = getColorScheme(data.event_type);
  
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
      maxW={{base: "100%", md: "14em", lg: "20em"}}
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
