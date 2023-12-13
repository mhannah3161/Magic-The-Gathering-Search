import { Outlet, Route, Routes, Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./src/pages/HomePage.jsx";
import Header from "./src/components/Header.jsx";
import Navbar from "./src/components/Navbar.jsx";
import Footer from "./src/components/Footer.jsx";
import Login from "./src/pages/Login.jsx";
import Signup from "./src/pages/Signup.jsx";
import themes from "./src/utils/schema.json";
import { useAuth } from "./src/components/AuthContext.jsx"

const App = () => {
  const { isLoggedIn } = useAuth();
  const [selectedTheme, setSelectedTheme] = useState(themes["devoid"]);
  const location = useLocation();

  return (
    <>
      <div
        style={{
          backgroundImage: selectedTheme.colors.backgroundImages,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        {!isLoggedIn && (
          <Navbar 
          selectedTheme={selectedTheme} 
          setSelectedTheme={setSelectedTheme} 
          isLoggedIn={isLoggedIn}
          />
        )}
        <Header
          selectedTheme={selectedTheme}
          style={{ fontFamily: selectedTheme.font }}
        />
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
                <Outlet />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Signup />
                <Outlet />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
        </Routes>
          <Footer selectedTheme={selectedTheme} />
      </div>
    </>
  );
};

export default App;
