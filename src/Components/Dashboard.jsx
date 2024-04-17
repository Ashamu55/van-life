import React from 'react'
import Modest from '../assets/Modest.png'
import Beach from '../assets/Beach.png'
import Green from '../assets/Green.png'

const Dashboard = () => {
  return (
    <>
      <div style={{
        width: "100%",
        backgroundColor: "#feebd0",
        padding: "30px 100px"
      }}>
        <h2 style={{ fontSize: "75px", fontWeight: "bold" }}>Welcome!</h2>
        <div style={{ display: "flex", gap: "1350px" }}>
          <p style={{ fontSize: "30px", fontWeight: "500", color: "#a69d8e" }}>income last <small style={{ textDecoration: "underline" }}>30 days</small></p>
          <p style={{ fontSize: "30px", fontWeight: "500", }}>Details</p>
        </div>
        <h3 style={{ fontSize: "80px", fontWeight: "bold" }}>$2,260</h3>
      </div>
      <div style={{ display: "flex", gap: "1229px", width: "100%", padding: "30px 100px", backgroundColor: "#feddb3" }}>
        <p style={{ fontSize: "40px", fontWeight: "500", fontWeight: "700" }}>Review Score 5.0 <small style={{ color: "#a69d8e", fontSize: "40px", fontWeight: "500", fontWeight: "700" }}>/5</small></p>
        <p style={{ fontSize: "30px", fontWeight: "500", }}>Details</p>
      </div>

      <div>
        <div style={{ display: "flex", gap: "1290px", width: "100%", padding: "30px 100px" }}>
          <p style={{ fontSize: "40px", fontWeight: "500", fontWeight: "700" }}>Your Listed vans</p>
          <p style={{ fontSize: "30px", fontWeight: "500", }}>View all</p>
        </div>

        <div style={{ display: "flex", width: "90%",backgroundColor:"#fefffe", padding: "15px 50px", margin:"auto", borderRadius:"20px", marginBottom:"30px"}}>
          <img style={{width:"150px"}} src={Modest} alt="" />
          <div style={{alignContent:"center", marginRight:'1100px', marginLeft:"20px"}}>
            <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Modest Explorer</h2>
            <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>$60/day</p>
          </div>
          <small style={{alignContent:"center",fontSize: "30px", fontWeight: "500",}}>Edit</small>
        </div>

        <div style={{ display: "flex", width: "90%",backgroundColor:"#fefffe", padding: "15px 50px", margin:"auto", borderRadius:"20px", marginBottom:"30px"}}>
    <img style={{width:"150px"}} src={Beach} alt="" />
    <div style={{alignContent:"center", marginRight:'1100px', marginLeft:"20px"}}>
      <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Beach Bum</h2>
      <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>$80/day</p>
    </div>
    <small style={{alignContent:"center",fontSize: "30px", fontWeight: "500",marginLeft:"90px"}}>Edit</small>
  </div>

  <div style={{ display: "flex", width: "90%",backgroundColor:"#fefffe", padding: "15px 50px", margin:"auto", borderRadius:"20px", marginBottom:"100px"}}>
    <img style={{width:"150px"}} src={Green} alt="" />
    <div style={{alignContent:"center", marginRight:'1100px', marginLeft:"20px"}}>
      <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Green Wonder</h2>
      <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>$70/day</p>
    </div>
    <small style={{alignContent:"center",fontSize: "30px", fontWeight: "500",marginLeft:"30px"}}>Edit</small>
  </div>
      </div>
    </>
  )
}

export default Dashboard