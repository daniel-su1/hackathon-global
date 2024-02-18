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
        <Stack direction={{base:"column", sm:"row"}}>
          <Box maxW={{base:"full", sm:"25em", md: "30em", lg: "35em", xl: "40em" }}>
            <Window
              bgGradient={
                "linear-gradient(90deg, rgb(23, 50, 81), rgb(43, 37, 80))"
              }
              accentGradient={
                "linear-gradient(90deg, rgb(31, 166, 255), rgb(137, 107, 255))"
              }
            >
              <Box padding={{ base: 0, md:1, xl: 4 } } pb={{base: 3, md: 1, xl:4}}>
                <Text
                  fontSize={{ md: "12.5pt", lg: "13.2pt", xl: "14pt" }}
                  fontWeight={350}
                >
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
              top={{base:"0",sm:"13em", md:"14em", lg:"12.5em", xl:"14em"}}
              width={{base:"full", sm:"23em", md: "23em", lg: "27em", xl: "30em" }}
              right={{ base:"0",sm:"-7vw", md: "3em", lg: "2em", xl: "6em" }}
              position={{base:"relative", sm: "absolute"}}
            >
              <Window
                bgGradient={
                  "linear-gradient(90deg, rgb(64, 45, 43), rgb(67, 25, 80))"
                }
                accentGradient={
                  "linear-gradient(90deg, rgb(240, 147, 68), rgb(255, 44, 251))"
                }
              >
                <Box padding={{ lg: 1, xl: 3 }}>
                  <Text
                    fontSize={{base:"19pt", md: "22pt", lg: "23pt", xl: "27pt" }}
                    fontWeight={600}
                  >
                    Sounds Good?
                  </Text>
                  <Text
                    fontSize={{ md: "12.5pt", lg: "13.2pt", xl: "14pt" }}
                    fontWeight={350}
                  >
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
        </Stack>
        <Box
          position={"relative"}
          zIndex={-1}
          left={{ base: "0%", sm: "10%", md: "60%", lg: "57%", xl: "55%" }}
          display={{ base: "none", sm: "block", md: "block", lg: "block" }}
        >
          <Box position="absolute" top={"-5em"}>
            <Image
              src={hero}
              alt="computer"
              maxWidth={{ base: "0", md: "35vw", lg: "35vw", xl: "30em" }}
              opacity="1"
            />
          </Box>
        </Box>
        <Box
          position={"relative"}
          zIndex={-1}
          left={{ base: "2.4em", sm: "65%", md: "71%", lg: "71%", xl: "78%" }}
          bottom={{base:"21em", sm:"30em", md: "28em", lg: "32em", xl: "33em" }}
          display={"flex"}
        >
          <Box position={"absolute"}>
            <Image
              src={rightStarsGears}
              maxWidth={{base: 0, sm:"36vw", md: "15em", lg: "17em", xl: "30em" }}
              alt="stars and gears"
            ></Image>
          </Box>
          <Box
            position={"absolute"}
            right={{base:"0", lg: "-1em", xl: "1em" }}
            top={"14em"}
          >
            <Image
              maxWidth={{base:"5.5em", sm:"0", lg: "6.5em", xl: "30em" }}
              src={purpleStar}
            ></Image>
          </Box>
          <Box
            position={"absolute"}
            right={{base:"-76vw", sm: "-6em"}}
            bottom={{base:"530px",sm:"-50em", md: "2em", lg: "-2em" }}
            display={{ base: "flex", sm: "flex" }}
          >
            <Image
              maxWidth={{base:"12em", md: "15em", lg: "18em", xl: "30em" }}
              src={blueVector}
            ></Image>
          </Box>
        </Box>
        <Box
          position={"relative"}
          zIndex={-1}
          display={"flex"}
          right={{sm:"7em", md: "7em", lg: "7em", xl: "10em" }}
          top={{sm:"7em", md: "4em"}}
        >
          <Box position={"absolute"}>
            <Image
              src={yellowVector}
              maxWidth={{base:0, sm: "27em", lg: "30em", xl: "50em" }}
              alt="yellow vector"
            />
          </Box>
          <Box
            position={"absolute"}
            left={{base:"-2.5em",sm:"6.5em", md: "5.5em", lg: "6em", xl: "4em" }}
            bottom={{base:"20em",sm:"0.8em", md:"1em", lg: "1em", xl: "3em" }}
          >
            <Image
              src={blueGear}
              maxWidth={{base:"4.3em", sm: "4.3em", lg: "4.8em", xl: "30em" }}
              alt="blue gear"
            />
          </Box>
        </Box>
        <Box
          position={"relative"}
          zIndex={-1}
          display={"flex"}
          bottom={{base:"43em",sm:"-15em", md: "32.5em", lg:"32em"}}
          right={{base:"-35vw", md:"1em", lg: "2em", xl: "4em" }}
        >
          <Box position={"absolute"}>
            <Image src={fushiaStar} maxWidth={{base:"5.5em", md: "6em", lg: "6.5em", xl: "30em" }} alt="fushia star" />
          </Box>

          <Box
            position={"absolute"}
            left={"10em"}
            bottom={{ lg: "1em", xl: 0 }}
          >
            <Image src={cyanSquare} maxWidth={"30em"} alt="cyan square" />
          </Box>
        </Box>
        <Box
          position={"relative"}
          zIndex={-4}
          display={{ base: "none",sm:"flex", md:"flex", lg: "flex", xl: "flex" }}
          left={{ sm:"82vw", md: "87vw", lg: "87vw", xl: "70em" }}
          bottom={{sm:"2em", md:"5em", lg: "5em", xl: 0 }}
        >
          <Box position={"absolute"}>
            <Image src={rectGlow} maxWidth={{sm: "3.5em", lg: "30em"}} alt="glowing rectangle" />
          </Box>
          <Box position={"absolute"} right={"-3em"} top={"7em"}>
            <Image src={fushiaVector} maxWidth={{sm:"10em", lg:"30em"}} alt="fushia vector" />
          </Box>
        </Box>
      </VStack>
    </Center>
  );
}

export default Home;
