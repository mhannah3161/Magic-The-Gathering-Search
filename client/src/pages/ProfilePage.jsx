import React from "react";
import Box from '@mui/material/Box';
import DeckPage from "./Decks.jsx";
import CollectionsPage from "./Collections.jsx";


function ProfilePage() {

  return (
    <>

      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between"
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
            margin: "10px", padding: "5px", backgroundColor: "white", border: "solid", borderColor: "grey", borderRadius: "20px", height: "70px", justifyContent: "center"
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
          <h1>Username</h1>
        </Box>
        {/* Maybe include a friends list? */}
        <Box style={{ margin: "10px", padding: "5px", backgroundColor: "white", border: "solid", borderColor: "grey", borderRadius: "20px", justifyContent: "center" }}
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
          display="flex" flexDirection="column" flexWrap="wrap" justifyContent="center"
          style={{ margin: "10px", padding: "5px", backgroundColor: "white", border: "solid", borderColor: "grey", borderRadius: "20px" }}
          sx={{
            width: {
              sx: "500px",
              sm: "500px",
              md: "29%",
              lg: "30%"
            }
          }}>
          <h2>Decks</h2>
          <DeckPage />
        </Box>


      </Box>
    </>
  );
}

export default ProfilePage;