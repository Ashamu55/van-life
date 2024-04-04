import React from 'react'
import Relax from '../Pages/Relax.png'
import Navbar from '../Navbar'

function About() {
  return (
    <>
    < Navbar />
      <div>
        <div>
          <img src={Relax} alt="" style={{ width: "100%", height: "80vh" }} />
        </div>

        <div style={{padding:"20px 100px",}}>
          <h2 style={{fontSize:"50px", fontFamily:"sans-serif", padding:"0px 180px"}}>Don't squeeze in a sedan when you could relax in a van.</h2>
          <p style={{fontSize:'35px', fontFamily:"sans-serif",padding:"50px 200px"}}>Our mission Is to enliven your road trip with the perrect travel <br />
            van rental. Our vans are recertified before each trip to ensure 
            your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
          <p style={{fontSize:'30px', fontFamily:"sans-serif", padding:"10px 200px"}}>Our team is full of vanlife enthusiasts who know firsthand the <br /> magic of touring the world on 4 wheels.</p>
        </div>

        <div style={{width:"1000px", backgroundColor:"#ffcc8d",fontFamily:"sans-serif",fontSize:"50px", borderRadius:"5px", padding:"90px 100px", fontWeight:"bold", margin:'40px 310px 100px'}}>
          <p>Your destination is waiting. <br /> Your van is ready. </p>
          <button style={{padding:"20px", width:"300px", backgroundColor:"black", color:"white", border:"none",  fontWeight:"bold",fontFamily:"sans-serif", fontSize:"30px", marginTop:"30px"}}>Explore our vans</button>
        </div>
      </div>
    </>
  )
}

export default About