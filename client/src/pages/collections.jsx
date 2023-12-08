import React from 'react';




const CollectionsPage = ({ data }) => {
    return (
        <div>
        <h1>Username's Collection Name</h1>
        <div className="mainbox">
            <div>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="card">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
        </div>
    );
};

export default CollectionsPage;