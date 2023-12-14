import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COLLECTION } from '../utils/queries';
import Auth from '../utils/auth';


const CollectionsPage = () => {
  const username = Auth.getUsername();
  console.log(username);
  const { data } = useQuery(QUERY_COLLECTION, { variables: { username: username } });
  console.log('data', data);
  const collections = data?.getCollection || [];
  console.log(collections);

  useEffect(() => {
    document.title = 'Collections';
  }, []);

  return (
    <div>
      <h1>{username}'s Collections</h1>
      <div className="mainbox">
        <div>
          {collections.length > 0 ? (
            collections.map((collection, index) => (
              <div key={index} className="card">
                {/* Render collection details here */}
                <p>{collection.collectionName}</p>
                {/* ... other collection details ... */}
                {collection.collection_cards.map((card, cardIndex) => (
                  <div key={cardIndex}>
                    <p>{card.card_name}</p>
                    {/* ... other card details ... */}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <h3>You haven't added any collections yet!</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
