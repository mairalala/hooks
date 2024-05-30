import React from 'react'
import { useState } from 'react'
const First = () => {

    const[counter, setCounter]= useState(0); 

  return (
    <div>
        <h3>El número del contador es: {counter} </h3>
        <button type="submit" onClick={() =>setCounter(counter +1)}>
            sumarcontador
        </button>
    </div>
  )
}

export default First