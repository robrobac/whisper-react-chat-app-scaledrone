import React from "react"

export default function Message({ id, text, author }) {

    if (author === "notification") {
        return (
            <li key={id}>
                {text}
            </li>
        )
    } else {
        return (
            <li key={id}>
                {text}, {author}
            </li>
        )
    }
    
}