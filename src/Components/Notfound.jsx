import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navigaing from './Navigaing'


const Notfound = () => {
    return (
        <>
        < Navigaing />
    <div style={{textAlign:"center",  padding:"200px 500px",}}>
        <h3
        style={{
           fontSize:"60px",
           fontWeight:"bold"
        }}
        >Sorry, the page you were looking for was not found....</h3>
        <button style={{
     marginTop:"30px",
     padding:"20px", 
     backgroundColor:'black', 
     border:'none', 
     width:"850px", 
     color:"white",
     fontSize:"40px", 
     fontFamily:"monospace",
     borderRadius:"10px"
     }}><Link to="/home">Return to home</Link></button>
    </div>
    </>
  )
}

export default Notfound