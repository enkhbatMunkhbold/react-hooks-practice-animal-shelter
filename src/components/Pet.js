import React from "react";

function Pet({pet, onAdoptPet}) {

  const { id, name, gender, type, age, weight, isAdopted } = pet

  function handleAdoptedClick() {
    onAdoptPet(id)
  }

  const petGender = gender === 'male' ? '♂' : '♀' 

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">          
          {name} 
        </span>
        <div className="meta">
          <span className="date"  style={{paddingRight: '8px'}}>{type}</span>
          {petGender}
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content" >
       { 
          isAdopted  ? <button className= "ui disabled button">Already adopted</button> :
          <button className= "ui primary button" onClick={handleAdoptedClick}>Adopt pet</button>
       }
      </div>
    </div>
  );
}

export default Pet;