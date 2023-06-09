import { useState } from 'react'
import React from "react"
import './Message.scss'

export default function Message({ id, text, authorId, author, time, currentUser, color }) {
    const [visible, setVisible] = useState(true); // Message date visible or not state.
    
    const timestamp = time;
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const handleTimeToggle = () => {
        setVisible((current) => !current);
    };

    const userColorStyle = {
        backgroundColor: `${color}`,
    };

    if (author === "notification") {
        return (
            <li key={id} className="notificationMessage">{text}</li>
        )
    } else {
        return (
            <li key={id}
                className={`${authorId === currentUser ? "messageItem currentUserMessage" : "messageItem userMessage"}`} >
                <div className="authorWrap">
                    <div style={userColorStyle} className="userColor"></div>
                    <p className="author">{author}</p>
                </div>
                
                <p className="message" onClick={handleTimeToggle}>{text}</p>
                <p className="time" hidden={visible}>{formattedDate}</p>
            </li>
        )
    }
};