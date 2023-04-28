import React from "react"

export default function User({ name, color }) {

    return (
        <li className="user">
            {name}, {color}
        </li>
    )
}