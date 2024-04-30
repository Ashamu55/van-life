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
import { Income } from "./Components/Income"
import { Reviews } from "./Components/Reviews"
import Dashboard from "./Components/Dashboard"
import { Van } from "./Components/Van"
import "./App.css"
import { VansInfo } from "./Components/VansInfo"
import Vandetails from "./Components/Vandetails"
import Vanphoto from "./Components/Vanphoto"
import Vanprices from "./Components/Vanprices"
// import Navigaing from "./Components/Navigaing"


function App() {
  return (
    <>
    <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/vans" element={<Vans />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="*" element={<Notfound />} /> {/* Catch-all route for unmatched paths */}
  <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root path to /home */}
  
  {/* Nested routes for /Host */}
  <Route path="/Host" element={<Host />}>
    <Route path="/Host" element={<Dashboard />} />
    <Route path="/Host/Income" element={<Income />} />
    <Route path="/Host/Reviews" element={<Reviews />} />
    <Route path="/Host/Vans" element={<Van />} />
    <Route path="/Host/Vans/:id" element={<VansInfo />} >
      <Route path="" element={< Vandetails />} />
      <Route path="vanphoto" element={< Vanphoto />} />
      <Route path="Vanprices" element={< Vanprices />} />
    </Route>
    
  </Route>
</Routes>

      <Footer />
    </>
  )
}

export default App
