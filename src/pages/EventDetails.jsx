import { useQuery } from "@apollo/client";
import {
  Link as RouterLink,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { GET_EVENT_BY_ID } from "../graphql/queries";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import {
  Box,
  Text,
  Tag,
  LinkBox,
  Flex,
  Button,
  HStack,
  Center,
  VStack,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FiShare } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import WindowButton from "../components/WindowButton";
import Window from "../components/Window";
import { formatDate, formatTime } from "../utils/convertUnixTimestamp";
import RelatedEvent from "../components/RelatedEvent";
import LoadingSpinner from "../components/LoadingSpinner";
import getColorScheme from "../utils/colorManagement";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function EventDetails() {
  let { id } = useParams();
  const { isLoggedIn } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  const toast = useToast(); // Initialize the useToast hook
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/events");
  };
  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: { id: id * 1.0 },
  });

  useEffect(() => {
    // Ensure data is loaded and event is private
    if (
      !loading &&
      data &&
      data.sampleEvent.permission === "private" &&
      !isLoggedIn
    ) {
      toast({
        title: "You must be logged in to view this page!",
        description: "Please log in to view this event.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      navigate("/login");
    }
  }, [data]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("savedEvents"));
    if (savedEvents && savedEvents.includes(id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [id]);

  const toggleSaveEvent = () => {
    const savedEvents = JSON.parse(localStorage.getItem("savedEvents")) || [];
    if (savedEvents.includes(id)) {
      // If the event is already saved, remove it
      const newSavedEvents = savedEvents.filter((savedId) => savedId !== id);
      localStorage.setItem("savedEvents", JSON.stringify(newSavedEvents));
      setIsSaved(false);
    } else {
      // If the event is not saved, add it
      const newSavedEvents = [...savedEvents, id];
      localStorage.setItem("savedEvents", JSON.stringify(newSavedEvents));
      setIsSaved(true);
    }
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        // This will be executed after the text has been successfully copied
        toast({
          title: "Copied link to clipboard!",
          description: "You can share it with others.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      },
      (err) => {
        // Handle any errors here
        console.error("Failed to copy: ", err);
      }
    );
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  const eventDetails = data.sampleEvent;
  const {
    bgGradient,
    accentGradient,
    tagColor,
    eventType,
    startingColorTransparent,
    endingColorTransparent,
  } = getColorScheme(eventDetails.event_type);
  console.log(eventDetails);

  return (
    <Center mt={"5em"}>
      <ScrollToTop />
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
            <HStack justifyContent={"space-between"} pb={3}>
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
                _hover={{ bg: "rgba(0,0,0, 0.4)" }}
              >
                <ArrowBackIcon size="md" mr={2} />
                <Text fontSize="md">Back to events</Text>
              </Button>
              <HStack>
                <Button
                  aria-label="Share"
                  bg={"transparent"}
                  _hover={{ bg: "rgba(0,0,0, 0.4)" }}
                  padding={3}
                  onClick={handleShareClick}
                >
                  <HStack>
                    <Icon as={FiShare} color={"white"} />
                    <Text
                      fontSize={"sm"}
                      display={{ base: "none", md: "block" }}
                    >
                      <u>Share</u>
                    </Text>
                  </HStack>
                </Button>
                {isLoggedIn && (
                  <Button
                    aria-label={isSaved ? "Unsave" : "Save"}
                    bg={"transparent"}
                    _hover={{ bg: "rgba(0,0,0, 0.4)" }}
                    padding={2}
                    onClick={toggleSaveEvent}
                  >
                    <HStack>
                      <Icon
                        as={isSaved ? FaHeart : FaRegHeart}
                        color={"white"}
                      />
                      <Text
                        fontSize={"sm"}
                        display={{ base: "none", md: "block" }}
                      >
                        <u>{isSaved ? "Unsave" : "Save"}</u>
                      </Text>
                    </HStack>
                  </Button>
                )}
              </HStack>
            </HStack>
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
            <HStack my={4} justifyContent={"space-between"}>
              <HStack>
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
            </HStack>

            <Tag size="md" variant="solid" bg={tagColor} borderRadius="full">
              {eventType}
            </Tag>
          </Box>
        </LinkBox>
        <Center>
          <VStack>
            {eventDetails.related_events.length && (
              <Text fontSize={{ base: "4xl", lg: "5xl" }} fontWeight="500">
                Related Events
              </Text>
            )}
            <Flex maxWidth={"50em"} flexWrap={"wrap"} justifyContent={"center"}>
              {eventDetails.related_events.map((id) => (
                <RelatedEvent id={id} />
              ))}
            </Flex>
          </VStack>
        </Center>
      </VStack>
    </Center>
  );
}

export default EventDetails;
