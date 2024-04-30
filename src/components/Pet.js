import React from "react";

function Pet({pet, onAdoptPet}) {

  function handleClick() {
    fetch(`http://localhost:3001/pets/${pet.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({isAdopted: true})
    }).then(res => res.json())
    .then(data => onAdoptPet(data.id))
  }

  const petGender = pet.gender === 'male' ? '♂' : '♀' 

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.name} 
        </span>
        <div className="meta">
          <span className="date" style={{padding: '8px'}}>{pet.type}</span>
          {petGender}
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={pet.isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
        <button className={!pet.isAdopted ? "ui primary button" : "ui disabled button"} onClick={handleClick}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;