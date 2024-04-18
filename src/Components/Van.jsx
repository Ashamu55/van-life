import React from 'react'
import Modest from '../assets/Modest.png'
import Beach from '../assets/Beach.png'
import Green from '../assets/Green.png'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const Van = () => {
  const vansData = [
    { id: 1, name: "Modest Explorer", imageLink: Modest, price: "60" },
    { id: 2, name: "Beach Bum", imageLink: Beach, price: "80" },
    { id: 3, name: "Green Wonder", imageLink: Green, price: "70" }
  ];

  return (
    <>
      <div style={{ marginleft: "60px" }}>

        <h1 style={{ fontSize: "40px", fontWeight: "500", fontWeight: "700", margin: "60px 95px 50px" }}>Your listed vans</h1>


        <div>
          {vansData.map((van) => (
            <div key={van.id}>
              <Link to={`/Host/vans/${van.id}`}>
              <div style={{ display: "flex", width: "90%", backgroundColor: "#fefffe", padding: "15px 50px", margin: "auto", borderRadius: "20px", marginBottom: "30px" }}>
                <img style={{ width: "150px" }} src={van.imageLink} alt="" />
                <div style={{ alignContent: "center", marginRight: '1100px', marginLeft: "20px" }}>
                  <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>{van.name}</h2>
                  <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>${van.price}/day</p>
                </div>
              </div>
          </Link>
            </div>
          ))}
        </div>

        <main>
          <Outlet/>
        </main>











        {/* <div style={{ display: "flex", width: "90%",backgroundColor:"#fefffe", padding: "15px 50px", margin:"auto", borderRadius:"20px", marginBottom:"30px"}}> */}
        {/* <img style={{width:"150px"}} src={Beach} alt="" /> */}
        {/* <div style={{alignContent:"center", marginRight:'1100px', marginLeft:"20px"}}> */}
        {/* <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Beach Bum</h2> */}
        {/* <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>$80/day</p> */}
        {/* </div> */}
        {/* </div> */}

        {/* <div style={{ display: "flex", width: "90%",backgroundColor:"#fefffe", padding: "15px 50px", margin:"auto", borderRadius:"20px", marginBottom:"100px"}}> */}
        {/* <img style={{width:"150px"}} src={Green} alt="" /> */}
        {/* <div style={{alignContent:"center", marginRight:'1100px', marginLeft:"20px"}}> */}
        {/* <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Green Wonder</h2> */}
        {/* <p style={{ color: "#a69d8e", fontSize: "26px", fontWeight: "500", fontWeight: "700" }}>$70/day</p> */}
        {/* </div> */}
      </div>
    </>
  )
  {/* </div> */ }
}
