import { Box, Flex, LinkBox } from "@chakra-ui/react";
import WindowButton from "./WindowButton";
import getColorScheme from "../utils/colorManagement";

function Window({children, bgGradient, accentGradient, startingColorTransparent, endingColorTransparent}) {

    return <LinkBox
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
        {children}
    </Box>
  </LinkBox>
}
export default Window;