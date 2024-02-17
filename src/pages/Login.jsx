import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Center,
  useToast
} from "@chakra-ui/react";

import Window from "../components/Window";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "htn" && password === "12345") {
      login();
      navigate(-1);
      toast({
        title: "Successfully logged in!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Center mt={"10%"}>
      <Window
        bgGradient={"linear-gradient(90deg, rgb(23, 50, 81), rgb(43, 37, 80))"}
        accentGradient={
          "linear-gradient(90deg, rgb(31, 166, 255), rgb(137, 107, 255))"
        }
      >
        <Box width={{ md: "30em" }} p={3}>
          <Text fontSize={"3xl"} fontWeight={600} mt={0} mb={3}>
            Login
          </Text>
          <form onSubmit={handleSubmit}>
            <Box>
              <VStack m="auto">
                <FormControl isRequired>
                  <FormLabel color={"gray.300"} htmlFor="username">Username</FormLabel>
                  <Input
                  border={"2px solid white"}
                    id="username"
                    type="text"
                    value={username}
                    placeholder="htn"
                    onChange={(e) => setUsername(e.target.value)}
                    borderRadius={0}
                  ></Input>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={"gray.300"} htmlFor="password">Password</FormLabel>
                  <Input
                  border={"2px solid white"}
                    id="password"
                    type="password"
                    value={password}
                    placeholder="12345"
                    onChange={(e) => setPassword(e.target.value)}
                    borderRadius={0}
                  ></Input>
                </FormControl>
                <Button
                  type="submit"
                  borderRadius={0}
                  bg={
                    "linear-gradient(90deg, rgba(31, 166, 255, 0.6), rgba(137, 107, 255, 0.6))"
                  }
                  _hover={{
                    bg: "linear-gradient(90deg, rgba(31, 166, 255, 1), rgba(137, 107, 255, 1))",
                  }}
                  border={"2px solid white"}
                >
                  <Text>Login</Text>
                </Button>
              </VStack>
            </Box>
          </form>
        </Box>
      </Window>
    </Center>
  );
}

export default Login;
