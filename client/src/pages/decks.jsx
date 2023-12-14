import React from "react";
import Box from '@mui/material/Box';
import { useQuery } from "@apollo/client";
import { QUERY_DECK } from "../utils/queries";
import Auth from "../utils/auth";

const DeckPage = ({ selectedTheme }) => {
  const username = Auth.getUsername();
  const { data } = useQuery(QUERY_DECK, { variables: { username: username } });
  const decks = data?.getDeck || [];

  return (
    <Box width="90%" height="500px" marginLeft="50px">
      <div style={{
        backgroundColor: "#3498db",
        height: "100%",
        border: "solid",
        borderColor: "#2c3e50",
        padding: "20px",
        borderRadius: "10px",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#2980b9",
        },
      }}>

        <h1 style={{ color: "#ecf0f1", marginBottom: "20px", fontFamily: "Arial, sans-serif" }}>{username}'s Decks</h1>

        <div className="mainbox">
          <div>
            {decks.length > 0 ? (
              decks.map((deck, index) => (
                <div key={index} className="card" style={{
                  backgroundColor: "#2c3e50",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#34495e",
                  },
                }}>
                  <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "10px", color: "#ecf0f1" }}>{deck.deckName}</p>
                  {deck.deck_cards.map((card, cardIndex) => (
                    <div key={cardIndex} style={{ marginBottom: "5px" }}>
                      <p style={{ margin: "0", fontSize: "16px", color: "#bdc3c7" }}>{card.card_name}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p style={{ color: "#ecf0f1", fontFamily: "Arial, sans-serif" }}>You currently have no decks!</p>
            )}
          </div>
        </div>

      </div>
    </Box>
  );
};

export default DeckPage;
