import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Center,
  Flex,
  Button,
} from "@chakra-ui/react";
import hero from "../assets/hero.png";
import Window from "../components/Window";
import { Link as RouterLink } from "react-router-dom";
import getColorScheme from "../utils/colorManagement";

function Home() {
  return (
    <Center>
      <VStack width={"70em"} alignItems={"flex-start"} mx={10}>
        <Center width={"100%"}>
          <Box my={16}>
            <Text fontSize="67pt" fontWeight="525" lineHeight={"70pt"}>
              Hackathon Global
            </Text>
            <HStack spacing={1}>
              <Text fontSize="2xl" fontWeight="400">
                Tech events brought to you by
              </Text>
              <Text
                fontSize="2xl"
                fontWeight="600"
                sx={{
                  background:
                    "linear-gradient(90deg, rgb(31, 166, 255), rgb(137, 107, 255))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent", // Fallback for browsers that do not support background-clip
                }}
              >
                Hack The North
              </Text>
            </HStack>
          </Box>
        </Center>
        <HStack>
          <Box maxW={"40em"}>
            <Window
              bgGradient={
                "linear-gradient(90deg, rgb(23, 50, 81), rgb(43, 37, 80))"
              }
              accentGradient={
                "linear-gradient(90deg, rgb(31, 166, 255), rgb(137, 107, 255))"
              }
            >
              <Box padding={4}>
                <Text fontSize={"lg"} fontWeight={350}>
                  Experience Hack The North's world class events, workshops, and
                  speakers. Join us for a weekend of hacking, learning, and fun.
                  Whether you're a seasoned developer or just starting out,
                  there's something for everyone at Hackathon Global. We can't
                  wait to see you there!
                </Text>
              </Box>
            </Window>
          </Box>
          <Box id="5" position={"relative"}>
            <Box top={"5em"} width={"30em"} right={"6em"} position={"absolute"}>
              <Window
                bgGradient={
                  "linear-gradient(90deg, rgb(64, 45, 43), rgb(67, 25, 80))"
                }
                accentGradient={
                  "linear-gradient(90deg, rgb(240, 147, 68), rgb(255, 44, 251))"
                }
              >
                <Box padding={3}>
                  <Text fontSize={"4xl"} fontWeight={600}>
                    Sounds Good?
                  </Text>
                  <Text>
                    Create an account or login to gain exclusive access to our
                    private events! Want to browse Workshops and Tech Talks?
                    Access them now for FREE!
                  </Text>
                  <Button
                    bg={"rgba(240, 147, 68, 0.6)"}
                    _hover={{
                      bg: "rgba(255, 44, 251, 0.6)",
                      transition: "0.4s",
                    }}
                    as={RouterLink}
                    to={"/events"}
                    mt={4}
                  >
                    <Text color="white">Hop In!</Text>
                  </Button>
                </Box>
              </Window>
            </Box>
          </Box>
        </HStack>

        <VStack zIndex="-1" justify={"flex-end"}>
          <HStack
            justify="flex-end"
            width={{ base: "8", sm: "0em", md: "29vw", lg: "42vw", xl: "40em" }}
          >
            <Box position={"relative"}>
              <Box position="absolute" top={"-5em"}>
                <Image
                  src={hero}
                  alt="computer"
                  maxWidth="32em"
                  opacity="1"
                  bottom="0"
                />
              </Box>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
}

export default Home;
