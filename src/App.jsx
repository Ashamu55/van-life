// import { Routes } from "react-router-dom"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import Vans from "./Components/Pages/Vans"
import Footer from "./Components/Footer"
import Notfound from "./Components/Notfound"
import Signin from "./Components/Signin"
import Host from "./Components/Host"
// import Navigaing from "./Components/Navigaing"


function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* < Navigaing /> */}
      <Routes>
        <Route path = "/home" element={<Home />} />
        <Route path = "/" element={<Navigate to = "/home" />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/vans" element={<Vans />} />
        < Route path = "/*" element={<Notfound />} />
        < Route path = "/signin" element={<Signin />} />
        < Route path = "/Host" element={<Host />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
