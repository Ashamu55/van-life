import React from 'react'
import { useParams } from 'react-router-dom';
import Modest from "../assets/Modest.png"
import Beach from "../assets/Beach.png"
import Green from "../assets/Green.png"

const Vanphoto = () => {
  const {id} = useParams();
  const vanphoto = [
    {
        id: 1,
        photo : Modest
    },

    {
        id: 2,
        photo : Beach
    },

    {
        id: 3,
        photo : Green
    }
];
const van = vanphoto.find((van)=>van.id === parseInt(id))

  return (
    <>
      <div>
      <img src={van.photo} alt="Van"/>
      </div>
    </>
  )
}

export default Vanphoto