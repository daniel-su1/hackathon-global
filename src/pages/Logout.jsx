import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
function Logout() {
  const navigate = useNavigate();
  const toast = useToast();
  const { logout } = useAuth();
  logout();
  useEffect(() => {
    toast({
        title: "Successfully logged out!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    navigate("/login");
  }, []);
  return null;
}

export default Logout;
