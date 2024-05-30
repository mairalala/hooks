import React, { useState } from 'react';

const Second = () => {
  const [name, setName] = useState("Laura Vanessa Ramirez");
  const [isNameChanged, setIsNameChanged] = useState(false);

  const changeName = () => {
    if (isNameChanged) {
      setName("Laura Vanessa Ramirez");
    } else {
      setName("Maira Alexandra Ramirez");
    }
    setIsNameChanged(!isNameChanged);
  }

  return (
    <div className="card p-3 my-3">
      <h3>Component: SecondComponent</h3>
      <p>{name}</p>
      <button 
        type="button" 
        className="btn btn-primary mt-2" 
        onClick={changeName}
      >
        Cambiar nombre
      </button>
    </div>
  );
}

export default Second;
