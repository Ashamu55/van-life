// import { Routes } from "react-router-dom"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import Vans from "./Components/Pages/Vans"
import Footer from "./Components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/home" element={<Home />} />
        <Route path = "/" element={<Navigate to = "/home" />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
