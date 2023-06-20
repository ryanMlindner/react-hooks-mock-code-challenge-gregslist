import React, { useState } from "react";

function ListingCard({ id, image, description, location, handleDelete }) {
  const [favorite, setFavorite] = useState(false);

  function toggleFavorite() {
    console.log("favorite toggle called");
    setFavorite(favorite => !favorite);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={toggleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => {handleDelete(id)}}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
