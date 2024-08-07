import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Footer from "./pages/Footer"
import ShopProducts from"./pages/ShopProducts"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Navbar/>
      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} /> 
          <Route path="/ShopProducts" element={<ShopProducts />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App

