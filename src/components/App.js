import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  function updateSearchTerm(searchTerm) {
    setSearchTerm(searchTerm);
  }
  
  return (
    <div className="app">
      <Header updateSearchTerm={updateSearchTerm}/>
      <ListingsContainer searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
