import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import Logout from "./pages/Logout";

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/Logout" element={<Logout />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
