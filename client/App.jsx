import { Outlet, Route, Routes, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "./src/pages/HomePage.jsx";
import Header from "./src/components/Header.jsx";
import Navbar from "./src/components/Navbar.jsx";
import Footer from "./src/components/Footer.jsx";
import BGimg from "./src/pics/forest_bg.png";
import Login from "./src/pages/Login.jsx";
import Signup from "./src/pages/Signup.jsx";
import themes from "./src/utils/schema.json";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes["devoid"]);
  const location = useLocation();

  return (
    <>
      <div
        style={{ backgroundImage: `url(${BGimg})`, backgroundSize: "cover" }}
      >
        <Navbar selectedTheme={selectedTheme} />
        <Header
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
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
                {location.pathname !== "/login" && (
                  <Footer selectedTheme={selectedTheme} />
                )}
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;