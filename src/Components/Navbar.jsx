import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const NavLinks = [
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Vans',
            path: '/vans'
        }
    ]
  return (
    <>
        <div>
            <ul style={{
                display:"flex",
                listStyle:'none', 
                justifyContent:"center", 
                justifyContent:"space-between", 
                padding:"50px 90px", 
                backgroundColor:'#fff7ed',
                fontSize:"30px",
                }}>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li>#VANLIFE</li>
                </NavLink>
                <ul style={{display:"flex", gap:"70px", listStyle:'none' }}>
                    {NavLinks.map((link)=>(
                        <NavLink style={{textDecoration: 'none', color: 'inherit',textDecoration: location.pathname === link.path ? 'underline' : '', fontWeight: location.pathname === link.path ? 'bold' : 'normal'}}
                        className={({isActive})=>
                        isActive ?  "ext-3xl font-bold underline" : null
                    }
                    key={link.name}
                    to={link.path}
                    >
                        <li>{link.name}</li>
                    </NavLink>
                    ))}
                <div style={{fontSize:"50px"}}>
                <Link to="/signin"><CgProfile /></Link>
                </div>
                </ul>
            </ul>
        </div>
    </>
  )
}

export default Navbar