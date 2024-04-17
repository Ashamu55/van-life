import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Navigaing from './Navigaing';

const Host = () => {
    const location = useLocation(); // Get the current location

    const NavLinks = [
        {
            name: 'Dashboard',
            path: '/Host',
        },
        {
            name: 'Income',
            path: '/Host/Income',
        },
        {
            name: 'Vans',
            path: '/Host/vans'
        },
        {
            name: 'Reviews',
            path: '/Host/Reviews'
        }
    ];

    return (
        <>
            <Navigaing />

            <div>
                <ul style={{
                    display: "flex",
                    listStyle: 'none',
                    justifyContent: "center",
                    justifyContent: "space-between",
                    padding: "50px 90px",
                    backgroundColor: '#fef7ec',
                    fontSize: "30px",
                }}>
                    <ul style={{ display: "flex", gap: "70px", listStyle: 'none' }}>
                        {NavLinks.map((link) => (
                            <NavLink 
                                style={{ 
                                    textDecoration: 'none', 
                                    color: 'inherit', 
                                    textDecoration: location.pathname === link.path ? 'underline' : '',
                                    fontWeight: location.pathname === link.path ? 'bold' : 'normal'
                                }}
                                key={link.name}
                                to={link.path}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </ul>
                </ul>
            </div>
            {/* Render nested routes */}
            <Outlet />
        </>
    );
};

export default Host;
