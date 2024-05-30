import React, { useState } from 'react'

const Second = () => {

    const [name, setName]= useState("Laura vanessa ramirez");
    const changeName= (e)=>{
        setName("Maira alexandra ramirez");
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