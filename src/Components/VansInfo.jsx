import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Modest from "../assets/Modest.png"
import Beach from "../assets/Beach.png"
import Green from "../assets/Green.png"

export const VansInfo = () => {
    const { id } = useParams()

    const vansData = [
        { id: '1', name: "Modest Explorer", imageLink: Modest, price: "60", buttonTitle: "Simple" },
        { id: '2', name: "Beach Bum", imageLink: Beach, price: "80", buttonTitle: "Rugged" },
        { id: '3', name: "Green Wonder", imageLink: Green, price: "70", buttonTitle: "Rugged" }
    ];

    const van = vansData.find(van => van.id === id);

    if (!van) {
        return <div>
            <p>No van finf with ID:<span>{id}</span></p>
        </div>
    }
    return (
        <div>
            <div>
                <img src={van.imageLink} alt="" />
                <button>{van.buttonTitle}</button>
                <h2>{van.name}</h2>
                <p>${van.price}/days</p>
            </div>

            <nav>
                <ul>
                    <NavLink to={`/Host/vans/${id}`}>
                        <li>Detail</li>
                    </NavLink>

                    <NavLink to={`/Host/vans/${id}/Vanprices`}>
                        <li>price</li>
                    </NavLink>

                    <NavLink to={`/Host/vans/${id}/Vanphoto`}>
                        <li>Photos</li>
                    </NavLink>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
