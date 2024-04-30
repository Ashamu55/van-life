import React from 'react'
import { useParams } from 'react-router-dom';

const Vanprices = () => {
  const {id} = useParams();
  const Vanprices = [
    {
        id: 1,
        price : "$60.00"
    },

    {
        id: 2,
        price : "$80.00"
    },

    {
        id: 3,
        price : "$100.00"
    }
];

const van = Vanprices.find((van)=>van.id === parseInt(id))
  return (
    <>
      <div>
        <h1>{van.price}<span>/days</span></h1>
      </div>
    </>
  )
}

export default Vanprices