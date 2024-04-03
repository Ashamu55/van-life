import React from 'react'
import Modest from '../Pages/Modest.png'
import Beach from '../Pages/Beach.png'
import Raliable from '../Pages/Raliable.png'
import Dream from '../Pages/Dream.png'
import Cruiser from '../Pages/Dream.png'
import Green from '../Pages/Green.png'

function Vans() {
  return (
    <>
      <div style={{ padding: "30px 200px", }}>
        <h2 style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: '50px' }}>Explore our van options</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "40px", marginTop: "20px" }}>
          <button style={{ padding: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "#ffebd1", fontSize: "20px", fontFamily: "sans-serif", }}>Simple</button>
          <button style={{ padding: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "#ffebd1", fontSize: "20px", fontFamily: "sans-serif", }}>Luxury</button>
          <button style={{ padding: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "#ffebd1", fontSize: "20px", fontFamily: "sans-serif", }}>Rugged</button>
          <p style={{ textDecoration: "underline", fontFamily: "sans-serif", fontSize: "25px", marginLeft: "40px" }}>Clear filters</p>
        </div>


        <main style={{display:"flex", gap:"200px", paddingLeft:"50px", marginBottom:"200px"}}>
          <section>
            <div style={{ marginTop: "100px" }}>
              <img style={{ borderRadius: "10px" }} src={Modest} alt="" />
              <div style={{ display: "flex", gap: "150px", marginTop: "20px" }}>
                <h3 style={{ fontFamily: "sans-serif", fontSize: "28px" }}>Modest Explorer</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: "30px", fontWeight: "bold", }}>$60 <br /> <span style={{ fontFamily: "sans-serif", fontSize: "20px", fontWeight: "lighter", marginLeft: '15px' }}>/day</span></p>
              </div>
              <button style={{ padding: "10px", marginTop: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "#e07655", fontSize: "20px", fontFamily: "sans-serif", color:"white"}}>Simple</button>
            </div>

            <div style={{ marginTop: "100px" }}>
              <img style={{ borderRadius: "10px" }} src={Raliable} alt="" />
              <div style={{ display: "flex", gap: "200px", marginTop: "20px" }}>
                <h3 style={{ fontFamily: "sans-serif", fontSize: "28px" }}>Reliable Red</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: "30px", fontWeight: "bold", }}>$100 <br /> <span style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px", fontWeight: "lighter", marginLeft: '15px'
                }}>/day</span></p>
              </div>
              <button style={{
                padding: "10px", marginTop: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "black",
                fontSize: "20px", fontFamily: "sans-serif",color:"white"
              }}>Luxury</button>
            </div>

            <div style={{ marginTop: "100px" }}>
              <img style={{ borderRadius: "10px", width:"470px" }} src={Cruiser} alt="" />
              <div style={{ display: "flex", gap: "200px", marginTop: "20px" }}>
                <h3 style={{ fontFamily: "sans-serif", fontSize: "28px" }}>The Cruiser</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: "30px", fontWeight: "bold", }}>$120 <br /> <span style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px", fontWeight: "lighter", marginLeft: '15px'
                }}>/day</span></p>
              </div>
              <button style={{
                padding: "10px", marginTop: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "black",
                fontSize: "20px", fontFamily: "sans-serif",color:"white"
              }}>Luxury</button>
            </div>
          </section>


          <section>
            <div style={{ marginTop: "100px", }}>
              <img style={{ borderRadius: "10px" }} src={Beach} alt="" />
              <div style={{ display: "flex", gap: "220px", marginTop: "20px" }}>
                <h3 style={{ fontFamily: "sans-serif", fontSize: "28px" }}>Beach Bum</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: "30px", fontWeight: "bold", }}>$80 <br /> <span style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px", fontWeight: "lighter", marginLeft: '15px'
                }}>/day</span></p>
              </div>
              <button style={{
                padding: "10px", marginTop: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "#115e59",
                fontSize: "20px", fontFamily: "sans-serif",color:"white"
              }}>Rugged</button>
            </div>

            <div style={{ marginTop: "100px" }}>
              <img style={{ borderRadius: "10px", width:"450px"}} src={Dream} alt="" />
              <div style={{ display: "flex", gap: "200px", marginTop: "20px" }}>
                <h3 style={{ fontFamily: "sans-serif", fontSize: "28px" }}>Dreamfinder</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: "30px", fontWeight: "bold", }}>$65 <br /> <span style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px", fontWeight: "lighter", marginLeft: '15px'
                }}>/day</span></p>
              </div>
              <button style={{
                padding: "10px", marginTop: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "#e07655",
                fontSize: "20px", fontFamily: "sans-serif",color:"white"
              }}>Simple</button>
            </div>

            <div style={{ marginTop: "100px" }}>
              <img style={{ borderRadius: "10px" }} src={Green} alt="" />
              <div style={{ display: "flex", gap: "200px", marginTop: "20px" }}>
                <h3 style={{ fontFamily: "sans-serif", fontSize: "28px" }}>Green Wonder</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: "30px", fontWeight: "bold", }}>$70 <br /> <span style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px", fontWeight: "lighter", marginLeft: '15px'
                }}>/day</span></p>
              </div>
              <button style={{
                padding: "10px", marginTop: "10px", width: "150px", borderRadius: "5px", border: "none", backgroundColor: "#115e59",
                fontSize: "20px", fontFamily: "sans-serif",color:"white"
              }}>Rugged</button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Vans