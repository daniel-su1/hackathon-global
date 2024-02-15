import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import hero from "../assets/hero.png";

function Home() {
  return (
    <Center>
      <VStack maxWidth={"70em"}>
        <Box>
          <Text fontSize="70pt" fontWeight="525">
            Hackathon Global
          </Text>
          <Text fontSize="lg">
            Experience the extraordinary with Hack the North, where innovation
            meets inspiration in a celebration of technology and creativity.
            Dive into a world where coding marries imagination, leading to
            groundbreaking projects and unforgettable experiences. Whether
            you're a seasoned developer or a curious newcomer, Hack the North
            invites you to challenge the status quo, connect with like-minded
            visionaries, and explore the limitless potential of technology. From
            exhilarating hackathons to insightful workshops and inspiring
            speakers, every moment is an opportunity to learn, create, and
            transform ideas into reality. Join us and be part of an event that's
            more than a competition—it's a community coming together to hack the
            future, today. Don't just dream about the future; come build it at
            Hack the North.
          </Text>
        </Box>
        <VStack>
          <HStack
            justify="flex-end"
            width="100%"
            position="absolute"
            zIndex="-1"
            maxWidth={"70em"}
          >
            <Image
              src={hero}
              alt="computer"
              maxWidth="35em"
              opacity="1"
              bottom="0"
            />
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
}

export default Home;
