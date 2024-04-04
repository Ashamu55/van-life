import React from 'react'
import Travel from '../Pages/Travel.png'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'


function Home() {
  return (
    <>
    < Navbar />
        <section>
            <div style={{textAlign:'center'}}>
                <div className='home-image'>
                    <img style={{width:"1902px",}} src={Travel} alt= "Freedom Blog" className='images' />
                </div>
                <div style={{ color:'white'}} className='text-overlay'>
                <h2 style={{fontSize:"80px", fontFamily:"sans-serif", padding:"20px 250px"}}> You got the travel plans, we got the travel vans.</h2>
                <p style={{fontSize:"40px",padding:"20px 250px"}}> Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip. </p>

                <button style={{
                    marginTop:"70px",
                    padding:"20px", 
                    backgroundColor:'#fe8d38', 
                    border:'none', 
                    width:"850px", 
                    color:"white",
                    fontSize:"40px", 
                    fontFamily:"monospace",
                    borderRadius:"10px"
                    }}><NavLink to="/Vans">Find your van</NavLink></button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home