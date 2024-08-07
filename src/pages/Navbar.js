import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from "react"

export default function Navbar() {
  
  return (
    <nav className="nav" style={{width:'99vw',height:'8vh',marginLeft:"1vw",marginTop:"1vh",marginBottom:"0vh"}}>
      <Link to="/" className="site-title">
      <p style={{float:"left",fontSize:"30%",marginTop:"1.5vh",display:"inline-block",textShadow:"2px 2px purple"}}>
                STKT<br/>
            <span style={{fontSize:"0.9vw",float:"left",textShadow:"3px 3px purple"}}>Beauty and Technology</span>
            </p>
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/ShopProducts">Products</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )

}
