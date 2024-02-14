import { useAuth } from "../context/AuthContext";

function Logout() {
    const { logout } = useAuth();
    logout();
    return (
        <div>
            You have been logged out
        </div>
    )
}

export default Logout
