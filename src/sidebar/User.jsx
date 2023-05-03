import React from "react"
import './User.scss'

export default function User({ name, color }) {

    const userColorStyle = {
        backgroundColor: `${color}`,
    };

    return (
        <li className="user">
            <div style={userColorStyle} className="userListColor"></div>
            <p>{name}</p>
        </li>
    )
};