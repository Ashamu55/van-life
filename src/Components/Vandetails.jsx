import React from 'react'
import { useParams } from 'react-router-dom'

const Vandetails = () => {
    const {id} = useParams();
    const vanDetails = [
        {
            id: 1,
            name: 'Modest Explorer',
            category: "simple",
            description: "Description: The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
            visibility: "Public",
            
        },
        {
            id: 2,
            name: 'Beach Bum',
            category: "Rugged",
            description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
            visibility: "Public",
            
        },
        {
            id: 3,
            name: 'Green Wonder',
            category: "Rugged",
            description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
            visibility: "Public",
            
        }
    ];

    const van = vanDetails.find((van)=>van.id === parseInt(id))
  return (
    <div>
        <div>
            <p style={{fontSize:"1rem", fontWeight:"700", marginBottom:"1.3rem",}}>Name:<span style={{fontSize:"1rem", fontWeight:"500"}}>{van.name}</span></p>
            <p style={{fontSize:"1rem", fontWeight:"700", marginBottom:"1.3rem"}}>category:<span style={{fontSize:"1rem", fontWeight:"500"}}>{van.category}</span></p>
            <p style={{fontSize:"1rem", fontWeight:"700", marginBottom:"1.3rem"}}>description:<span style={{fontSize:"1rem", fontWeight:"500"}}>{van.description}</span></p>
            <p style={{fontSize:"1rem", fontWeight:"700"}}>visibility:<span style={{fontSize:"1rem", fontWeight:"500"}}>{van.visibility}</span></p>
        </div>
    </div>
  )
}

export default Vandetails