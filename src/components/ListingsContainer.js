import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

const APIURL = "http://localhost:6001"

function ListingsContainer({searchTerm}) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(`${APIURL}/listings`)
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function handleDelete(id) {
    fetch(`${APIURL}/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(() => {
      const newListings = listings.filter(listing => listing.id !== id);
      setListings(newListings);
    })
  }

  function displayListings() {
    //CANNOT believe this search filter worked first try :D
    const filteredList = listings.filter(listing => listing.description.includes(searchTerm))
    console.log(filteredList)
    const listingArray = filteredList.map(listing => {
      return (<ListingCard key={listing.id}
      id={listing.id}
      image={listing.image}
      description={listing.description}
      location={listing.location}
      handleDelete={handleDelete}/>)
    })
    return listingArray
  }

  return (
    <main>
      <ul className="cards">
        {displayListings()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
