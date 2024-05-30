import React from 'react'
import { useState } from 'react'
const First = () => {

    const[counter, setCounter]= useState(0); 

  return (
    <div>
        <h3>El número del contador es: {counter} </h3>
        <button type="submit" class="btn btn-success" onClick={() =>setCounter(counter +1)}>
            sumar contador
        </button>
    </div>
  )
}

export default First