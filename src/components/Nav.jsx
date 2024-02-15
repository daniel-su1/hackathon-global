"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Text,
  Stack,
  Image,
  Center
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import profile from "../assets/profile.svg";
import { useAuth } from "../context/AuthContext";

const links = [
  { name: "Events", route: "/events" },
  { name: "Login", route: "/login" },
  { name: "Logout", route: "/logout" },
  { name: "Github", route: "https://github.com/daniel-su1/hackathon-global" },
  {
    name: "Writeup",
    route:
      "https://docs.google.com/document/d/1a3IPTkuyCA8v5aYruh4ii17F2IFCho5rlMZm2WMboHA/edit?usp=sharing",
  },
];

function Message() {
  return (
    <Text display={{ base: "none", md: "flex" }}>
      Hello, <b>htn</b>!
    </Text>
  );
}

function NavBox({ children, link, mobile }) {
  const isActiveLink = (route) => location.pathname === route;

  return (
    <Box
      px={2}
      py={mobile ? 3.5 : 2}
      rounded={"md"}
      color={isActiveLink(link.route) ? "white" : "gray.400"}
      _hover={{
        textDecoration: "none",
        bg: "gray.700",
        transition: "0.4s",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
}

export default function nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <Box px={{base: "2", md: "08"}} pt={5} maxWidth="70em" margin="auto">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          colorScheme="white"
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
          
        />
        <HStack spacing={8} alignItems={"center"}>
          <NavLink to="/">
            <Image src={Logo} height="2.5em" ml={{base: "8", md: "0"}}></Image>
          </NavLink>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/events" key={1}>
              <NavBox link={links[0]}>Events</NavBox>
            </NavLink>
            <NavLink to={links[3].route} key={2}>
              <NavBox link={links[3]}>Github</NavBox>
            </NavLink>
            <NavLink to={links[4].route} key={3}>
              <NavBox link={links[4]}>Writeup</NavBox>
            </NavLink>
            <NavLink to={isLoggedIn ? "/logout" : "/login"} key={4}>
              <NavBox link={isLoggedIn ? links[2] : links[1]}>
                {isLoggedIn ? links[2].name : links[1].name}
              </NavBox>
            </NavLink>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <Text color="gray.400" mx={3} fontSize="md">
              {isLoggedIn ? <Message /> : " "}
            </Text>
            {isLoggedIn ? <Avatar size={"md"} src={profile} /> : null}
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box my="5" pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavLink to="/events" key={1}>
              <NavBox link={links[0]} mobile={true}>
                <Center>Events</Center>
              </NavBox>
            </NavLink>
            <NavLink to={links[3].route} key={2}>
              <NavBox link={links[3]} mobile={true}>
                <Center>Github</Center>
              </NavBox>
            </NavLink>
            <NavLink to={links[4].route} key={3}>
              <NavBox link={links[4]} mobile={true}>
                <Center>Writeup</Center>
              </NavBox>
            </NavLink>
            <NavLink to={isLoggedIn ? "/logout" : "/login"} key={4}>
              <NavBox link={isLoggedIn ? links[2] : links[1]} mobile={true}>
                <Center>{isLoggedIn ? links[2].name : links[1].name}</Center>
              </NavBox>
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
