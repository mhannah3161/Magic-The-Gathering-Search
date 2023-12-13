import React from 'react';

const CollectionsPage = ({ data }) => {
  return (
    <div>
      <h1>Username's Collection Name</h1>
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
            <p>MF collections page</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
