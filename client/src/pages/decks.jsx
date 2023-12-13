import React from "react";

const DeckPage = ({ data }) => {
  return (
    <div>
      <h1>Username's Deck Name</h1>
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
            <p>MF deck page</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeckPage;
