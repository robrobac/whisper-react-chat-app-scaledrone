import React from "react"

export default function User({ name, color }) {

    return (
        <li>
            {name}, {color}
        </li>
    )
}