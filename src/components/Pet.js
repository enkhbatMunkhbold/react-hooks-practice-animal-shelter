import React from "react";

function Pet({pet, onAdoptPet}) {

  function handleAdoptedClick() {
    onAdoptPet(pet.id)
  }

  const petGender = pet.gender === 'male' ? '♂' : '♀' 

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">          
          {pet.name} 
        </span>
        <div className="meta">
          <span className="date"  style={{paddingRight: '8px'}}>{pet.type}</span>
          {petGender}
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content" >
        <button className={pet.isAdopted ? "ui primary button" : "ui disabled button" }>Already adopted</button>
        <button className={pet.isAdopted ? "ui disabled button" :  "ui primary button"} onClick={handleAdoptedClick}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;