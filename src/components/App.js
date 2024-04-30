import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChangeType(e) {
    setFilters({type: e.target.value})
  } 
 
  function handleFindPets() {
    const requestUrl = filters.type === 'cat' ? '?type=cat': filters.type === 'dog' ? '?type=dog' : filters.type === 'micropig' ? '?type=micropig' : ''

    fetch(`http://localhost:3001/pets` + requestUrl)
    .then(res => res.json())
    .then(animals => setPets(animals))
  }

  function handleAdoptPet(adoptedPetId) {
    const updatedPets = pets.map(pet => pet.id === adoptedPetId ? {...pet, isAdopted: true} : pet)    
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;