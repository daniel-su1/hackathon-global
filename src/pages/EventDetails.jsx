import { useQuery } from "@apollo/client";
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import { GET_EVENT_BY_ID } from "../graphql/queries"; // Adjust the path as needed
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Box,
  Text,
  Tag,
  LinkBox,
  LinkOverlay,
  Flex,
  Button,
  HStack,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import WindowButton from "../components/WindowButton";
import { formatDate, formatTime } from "../utils/convertUnixTimestamp";
import Event from "../components/Event";


function EventDetails() {
  const { id } = useParams();
  const { isLoggedIn } = useAuth();
  let bgGradient;
  let accentGradient;
  let startingColor;
  let endingColor;
  let tagColor;
  let eventType;

  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: { id: id * 1.0 },
  });

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const eventDetails = data.sampleEvent;

  console.log(eventDetails);
  console.log(isLoggedIn);
  switch (eventDetails.event_type) {
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
      bgGradient = "linear-gradient(90deg,  rgb(21, 66, 81), rgb(22, 49, 81))";
      startingColor = "rgb(25, 251, 255)";
      endingColor = "rgb(31, 166, 255)";
      tagColor = "rgba(25, 251, 255, 0.6)";
      break;
  }
  accentGradient = `linear-gradient(90deg, ${startingColor}, ${endingColor})`;
  let startingColorTransparent = startingColor
    .replace("rgb", "rgba")
    .replace(
      ")",
      ", " + (eventDetails.event_type === "tech_talk" ? "0.6)" : "0.75)")
    );
  let endingColorTransparent = endingColor
    .replace("rgb", "rgba")
    .replace(
      ")",
      ", " + (eventDetails.event_type === "tech_talk" ? "0.6)" : "0.75)")
    );

  switch (eventDetails.event_type) {
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

  return (
    <Center>
      <LinkBox
        as="article"
        maxW="40em"
        p="5"
        borderWidth="2px"
        bg={bgGradient}
        padding="0"
        margin="1em"
      >
        <Box
          zIndex="-1"
          width="100%"
          height="100%"
          position="absolute"
          bg={accentGradient}
          filter="blur(10px)"
        ></Box>

        <Box bg={accentGradient} padding="15px" position="relative">
          <Flex flexDir="row-reverse">
            <WindowButton />
            <WindowButton />
            <WindowButton />
          </Flex>
        </Box>
        <Box padding="6" pt="4">
            <Button
              aria-label="Back to events"
              variant="ghost"
              size="lg"
              onClick={handleBackButtonClick}
              fontSize="30px"
              color="white"
              margin="0"
              p="0"
              pl="2"
              pr="3"
              right="2"
              _hover={{ bg: "rgba(0,0,0, 0.4)", }}
            >
              <ArrowBackIcon size="md" mr={2} />
              <Text fontSize="md">Back to events</Text>
            </Button>
          <Text fontSize="3xl" fontWeight="bold">
            {eventDetails.name}
          </Text>
          <Box mb="3">
            {eventDetails.speakers.map((speaker, index) => (
              <Text fontSize="xl" key={index}>
                {speaker.name}
              </Text>
            ))}
          </Box>
          <Text mb="3" fontSize="13pt">
            {formatDate(eventDetails.start_time) +
              " " +
              formatTime(eventDetails.start_time) +
              " - " +
              formatTime(eventDetails.end_time)}
          </Text>

          <Text mb="3" color="rgba(255, 255, 255, 0.6)" fontSize="12.5pt">
            {eventDetails.description}
          </Text>
          <HStack my={4}>
            {isLoggedIn && eventDetails.private_url && (
              <Button
                as={RouterLink} // Use the RouterLink component for navigation
                to={eventDetails.private_url} // Navigate to eventDetails.private_url
                bg={startingColorTransparent}
                _hover={{ bg: endingColorTransparent, transition: "0.4s" }}
              >
                <Text>Join the Party!</Text>
              </Button>
            )}
            {eventDetails.public_url && (
              <Button
                bg={startingColorTransparent}
                _hover={{ bg: endingColorTransparent, transition: "0.4s" }}
                as={RouterLink}
                to={eventDetails.public_url} // Navigate to eventDetails.public_url
              >
                <Text color="white">Watch the Stream!</Text>
              </Button>
            )}
          </HStack>

          <Tag size="md" variant="solid" bg={tagColor} borderRadius="full">
            {eventType}
          </Tag>
        </Box>
      </LinkBox>
    </Center>
  );
}

export default EventDetails;
