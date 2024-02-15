import { useQuery } from "@apollo/client";
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import { GET_EVENT_BY_ID } from "../graphql/queries"; 
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
  VStack
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import WindowButton from "../components/WindowButton";
import { formatDate, formatTime } from "../utils/convertUnixTimestamp";
import RelatedEvent from "../components/RelatedEvent";
import LoadingSpinner from "../components/LoadingSpinner";
import getColorScheme from "../utils/colorManagement";


function EventDetails() {
  const { id } = useParams();
  const { isLoggedIn } = useAuth();

  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: { id: id * 1.0 },
  });

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/events");
  };

  if (loading) return <LoadingSpinner/>;
  if (error) return <p>Error: {error.message}</p>;

  const eventDetails = data.sampleEvent;
  const { bgGradient, accentGradient, tagColor, eventType, startingColorTransparent, endingColorTransparent } = getColorScheme(eventDetails.event_type);

  return (
    <Center>
      <VStack>
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
      <HStack>
        {eventDetails.related_events.map((id) => (
          <RelatedEvent id={id} />
        ))}
      </HStack>
      </VStack>
    </Center>
  );
}

export default EventDetails;
