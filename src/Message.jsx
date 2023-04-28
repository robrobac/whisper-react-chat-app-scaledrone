import React from "react"

export default function Message({ id, text, author, time }) {
    const timestamp = time;
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    if (author === "notification") {
        return (
            <li key={id} className="notificationMessage">
                {text}, {formattedDate}
            </li>
        )
    } else {
        return (
            <li key={id} className="message">
                {text}, {author}, {formattedDate}
            </li>
        )
    }
    
}