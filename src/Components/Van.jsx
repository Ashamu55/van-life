import React from 'react'
import Modest from '../assets/Modest.png'
import Beach from '../assets/Beach.png'
import Green from '../assets/Green.png'

export const Van = () => {
  return (
    <>
      <div style={{ marginleft:"60px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "500", fontWeight: "700",margin:"60px 95px 50px" }}>Your listed vans</h1>

        <div>
      <div style={{ display: "flex", width: "90%",backgroundColor:"#fefffe", padding: "15px 50px", margin:"auto", borderRadius:"20px", marginBottom:"30px"}}>
        <img style={{width:"150px"}} src={Modest} alt="" />
        <div style={{alignContent:"center", marginRight:'1100px', marginLeft:"20px"}}>
          <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Modest Explorer</h2>
          <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>$60/day</p>
        </div>
      </div>

      <div style={{ display: "flex", width: "90%",backgroundColor:"#fefffe", padding: "15px 50px", margin:"auto", borderRadius:"20px", marginBottom:"30px"}}>
  <img style={{width:"150px"}} src={Beach} alt="" />
  <div style={{alignContent:"center", marginRight:'1100px', marginLeft:"20px"}}>
    <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Beach Bum</h2>
    <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>$80/day</p>
  </div>
</div>

<div style={{ display: "flex", width: "90%",backgroundColor:"#fefffe", padding: "15px 50px", margin:"auto", borderRadius:"20px", marginBottom:"100px"}}>
  <img style={{width:"150px"}} src={Green} alt="" />
  <div style={{alignContent:"center", marginRight:'1100px', marginLeft:"20px"}}>
    <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Green Wonder</h2>
    <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>$70/day</p>
  </div>
</div>
    </div>
      </div>
    </>
  )
}
