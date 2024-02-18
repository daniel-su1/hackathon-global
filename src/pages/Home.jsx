import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Center,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import hero from "../assets/hero.png";
import rightStarsGears from "../assets/rightStarsGears.png";
import purpleStar from "../assets/purple-star.png";
import blueVector from "../assets/blue-vector-2.svg";
import yellowVector from "../assets/yellow-vector.png";
import blueGear from "../assets/blue-gear.png";
import fushiaStar from "../assets/fushia-star.png";
import fushiaVector from "../assets/fushia-vector.png";
import cyanSquare from "../assets/cyan-square.png";
import rectGlow from "../assets/rect-glow.svg";
import ultraPinkGear from "../assets/ultra-pink-gear.svg";
import Window from "../components/Window";
import { Link as RouterLink } from "react-router-dom";
import getColorScheme from "../utils/colorManagement";

function Home() {
  return (
    <Center>
      <VStack
        width={{ base: "100%", md: "70em" }}
        alignItems={"flex-start"}
        mx={10}
      >
        <Flex
          width={"full"}
          justifyContent={{ base: "flexStart", md: "center" }}
        >
          <Box my={16}>
            <Text
              fontSize={{ base: "40pt", md: "50pt", lg: "67pt" }}
              fontWeight="525"
              lineHeight={{ base: "1.2", md: "1.1", lg: "1.1" }}
            >
              Hackathon Global
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              gap={{ base: 0, md: "0.4rem" }}
              width={"inherit"}
            >
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="400">
                Tech events brought to you by
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
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
            </Stack>
          </Box>
        </Flex>
        <HStack>
          <Box maxW={{ md: "30em", lg: "40em" }}>
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
            <Box
              top={"5em"}
              width={{ md: "27em", lg: "30em" }}
              right={"6em"}
              position={"absolute"}
            >
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
                  <Text fontSize={"lg"} fontWeight={350}>
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
        <Box
          position={"relative"}
          zIndex={-1}
          left={{ base: "0%", sm: "10%", md: "29%", lg: "47%", xl: "55%" }}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          <Box position="absolute" top={"-5em"}>
            <Image src={hero} alt="computer" maxWidth={"30em"} opacity="1" />
          </Box>
        </Box>
        <Box
          position={"relative"}
          zIndex={-1}
          left={{ base: "0%", sm: "10%", md: "29%", lg: "73%", xl: "78%" }}
          bottom={"33em"}
          display={"flex"}
        >
          <Box position={"absolute"}>
            <Image
              src={rightStarsGears}
              maxWidth={"30em"}
              alt="stars and gears"
            ></Image>
          </Box>
          <Box position={"absolute"} right={"1em"} top={"14em"}>
            <Image maxWidth={"30em"} src={purpleStar}></Image>
          </Box>
          <Box position={"absolute"} right={"-6em"} bottom={"-2em"}>
            <Image maxWidth={"30em"} src={blueVector}></Image>
          </Box>
        </Box>
        <Box
          position={"relative"}
          zIndex={-1}
          display={"flex"}
          right={"10em"}
          top={"4em"}
        >
          <Box position={"absolute"}>
            <Image src={yellowVector} maxWidth={"30em"} alt="yellow vector" />
          </Box>
          <Box position={"absolute"} left={"4em"} bottom={"3em"}>
            <Image src={blueGear} maxWidth={"30em"} alt="blue gear" />
          </Box>
        </Box>
        <Box position={"relative"} zIndex={-1} display={"flex"} bottom={"32em"} right={"4em"}>
          <Box position={"absolute"}>
            <Image src={fushiaStar} maxWidth={"30em"} alt="fushia star" />
          </Box>

          <Box position={"absolute"} left={"10em"}>
            <Image src={cyanSquare} maxWidth={"30em"} alt="cyan square" />
          </Box>
        </Box>
        <Box position={"relative"} zIndex={-4} display={"flex"} left={"70em"}>
          <Box position={"absolute"}>
            <Image src={rectGlow} maxWidth={"30em"} alt="glowing rectangle" />
          </Box>
          <Box position={"absolute"} right={"-3em"} top={"7em"}>
            <Image src={fushiaVector} maxWidth={"30em"} alt="fushia vector" />
          </Box>
        </Box>
      </VStack>
    </Center>
  );
}

export default Home;
