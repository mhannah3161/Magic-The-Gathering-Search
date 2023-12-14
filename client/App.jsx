import { Outlet, Route, Routes, Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./src/pages/HomePage.jsx";
import Header from "./src/components/Header.jsx";
import Navbar from "./src/components/Navbar.jsx";
import Footer from "./src/components/Footer.jsx";
import Login from "./src/pages/Login.jsx";
import Signup from "./src/pages/Signup.jsx";
import DeckPage from "./src/pages/decks.jsx"
import themes from "./src/utils/schema.json";
import { useAuth } from "./src/components/AuthContext.jsx"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
import CollectionsPage from './src/pages/Collections.jsx';
import ProfilePage from "./src/pages/ProfilePage.jsx";


const App = () => {
  const { isLoggedIn } = useAuth();
  const [selectedTheme, setSelectedTheme] = useState(themes["devoid"]);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";


  return (
    <>
    <ApolloProvider client={client}>
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
        {!isLoginPage && (
            <Header
              selectedTheme={selectedTheme}
              style={{ fontFamily: selectedTheme.font }}
            />
          )}
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login selectedTheme={selectedTheme} />
                <Outlet />
              </>
            }
          />
          <Route
            path="/Signup"
            element={
              <>
                <Signup />
                <Outlet />
              </>
            }
          />
          <Route
            path="/Decks"
            element={
              <>
                <DeckPage  selectedTheme={selectedTheme}  />
              </>
            }
          />
          <Route
            path="/Collections"
            element={
              <>
                <CollectionsPage  selectedTheme={selectedTheme} />
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
           <Route
            path="/ProfilePage"
            element={
              <>
                <ProfilePage  selectedTheme={selectedTheme} />
              </>
            }
          />
        </Routes>
          <Footer selectedTheme={selectedTheme} />
      </div>
      </ApolloProvider>
    </>
  );
};
export default App;