import React, { useEffect, useState } from "react";
import "./App.css";
import Signup from "./Components/Authentication/Signup/Signup";
import Login from "./Components/Authentication/Login/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Sign } from "crypto";
import HomePage from "./Components/HomePage/HomePage";
import Loader from "./Components/utils/Loader/Loader";
import NotFound from "./Components/Not Found/NotFound";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let userToken = localStorage.getItem("token");
    if (userToken) {
      setToken(userToken);
    }
    setLoading(false);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            token ? <Navigate to="/homePage" /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
