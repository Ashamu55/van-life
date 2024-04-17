import React from 'react'
import Chart from '../assets/Chart.png'

export const Income = () => {
  return (
    <>
      <div style={{margin:"20px 90px 0px"}}>
          <h1 style={{ fontSize: "45px", fontWeight: "bold",marginBottom:"35px" }}>Income</h1>
          <p style={{ fontSize: "30px", fontWeight: "500", color: "#a69d8e", marginBottom:"20px" }}>Last <small style={{ textDecoration: "underline" }}>30 days</small></p>
          <h3 style={{ fontSize: "65px", fontWeight: "bold",marginBottom:"100px"}}>$2,260</h3>
          <img style={{width:"60%",marginBottom:"200px"}} src={Chart} alt="" />
      </div>

      <div style={{margin:"20px 90px 0px"}}>
        <div style={{display:"flex", }}>
          <h3 style={{ fontSize: "45px", fontWeight: "bold",}}>Your Transactions (3)</h3>
          <p style={{ fontSize: "30px", fontWeight: "500", color: "#a69d8e"}}>Last <small  style={{ textDecoration: "underline" }}>30 days</small></p>
        </div>
      </div>
    </>
  )
}
