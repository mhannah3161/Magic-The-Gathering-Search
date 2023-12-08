import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar() {
    
    return (
      <>
        <div>
          <input type="text" placeholder='Search'/>
          <button>Search</button>
        </div>
        <div>
          <button><Link to="/Login">Login!</Link></button>
          <button>Logout</button>
          <button><Link to="/collections">Collections</Link></button>
          <button><Link to="/decks">Decks</Link></button>
        </div>
      </>
    );
  }