import React from "react";
import Box from '@mui/material/Box';
import { BorderAllRounded, BorderStyle } from "@mui/icons-material";
import { useQuery } from "@apollo/client";
import { QUERY_DECK } from "../utils/queries";
import Auth from "../utils/auth";


const DeckPage = ({ selectedTheme }) => {
  const username = Auth.getUsername();
  const { data } = useQuery(QUERY_DECK, { variables: { username: username } });
  const decks = data?.getDeck?.decks || [];

  return (
    <Box width="90%" height="500px" marginLeft="50px">
      <div style={{backgroundColor: selectedTheme.colors["background-color"], height:"100%", border:"Solid", borderColor: selectedTheme.colors["button-color"]}}>

      <h1>{username}'s Decks</h1>
      <div className="mainbox">
        <div>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            ))
            ) : (
              <p>You currently have no decks!</p>
              )}
        </div>
      </div>
              </div>
    </Box>
  );
};

export default DeckPage;
