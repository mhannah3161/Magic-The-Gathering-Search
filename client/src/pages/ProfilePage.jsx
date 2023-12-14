import React from "react";
import Box from '@mui/material/Box';
import DeckPage from "./decks.jsx";
import CollectionsPage from "./Collections.jsx";
import Auth from '../utils/auth';

function ProfilePage(selectedTheme) {
  const username = Auth.getUsername();
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between"
          }
        }}
      >
        <Box
          style={{
            margin: "10px",
            padding: "5px",
            backgroundColor: "#3498db",
            border: "solid",
            borderColor: "#2c3e50",
            borderRadius: "20px",
            height: "70px",
            justifyContent: "center",
            color: "#ecf0f1",
            fontFamily: "Arial, sans-serif",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#2980b9"
            }
          }}
          sx={{
            width: {
              xs: "500px",
              sm: "500px",
              md: "29%",
              lg: "30%"
            }
          }}
        >
          <h1>{username}'s Profile</h1>
        </Box>
        {/* Maybe include a friends list? */}
        <Box
          style={{
            margin: "10px",
            padding: "5px",
            backgroundColor: "#3498db",
            border: "solid",
            borderColor: "#2c3e50",
            borderRadius: "20px",
            justifyContent: "center",
            color: "#ecf0f1",
            fontFamily: "Arial, sans-serif",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#2980b9"
            }
          }}
          sx={{
            width: {
              xs: "500px",
              sm: "500px",
              md: "29%",
              lg: "30%"
            }
          }}
        >
          <h2>Collections</h2>
          <CollectionsPage />
        </Box>
        <Box
          // display="flex"
          // flexDirection="column"
          // flexWrap="wrap"
          // justifyContent="center"
          style={{
            margin: "10px",
            padding: "5px",
          //   backgroundColor: "#3498db",
          //   border: "solid",
          //   borderColor: "#2c3e50",
          //   borderRadius: "20px",
          //   transition: "background-color 0.3s",
          //   "&:hover": {
          //     backgroundColor: "#2980b9"
          //   }
          }}
          sx={{
            width: {
              sx: "500px",
              sm: "500px",
              md: "29%",
              lg: "30%"
            }
          }}
        >
          <DeckPage />
        </Box>
      </Box>
    </>
  );
}

export default ProfilePage;
