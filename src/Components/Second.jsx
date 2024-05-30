import React, { useState } from 'react'

const Second = () => {

    const [name, setName]= useState("Laura vanessa ramirez");
    const [isNameChanged, setIsNameChanged]= useState(false);
    const changeName= (e)=>{
        if (isNameChanged) {
            setName("Laura vanessa ramirez");
        }else{
            setName("Maira Alexandra ramirez");
        }
        setIsNameChanged(!isNameChanged);
    }

  return (
    <div>
        <h3>Component:  SecondComponent</h3>
        <p>{name}</p>
        <button class='btn btn-success' onClick={changeName}>
            cambiar nombre
        </button>
    </div>
  )
}

export default Second