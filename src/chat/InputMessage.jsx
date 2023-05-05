import React, { useState } from "react";
import './InputMessage.scss'


export default function InputMessage ({onSubmit}) {
    const [text, setText] = useState("");

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="messageForm">
            <input className="messageInput"
                required
                type="text"
                value={text}
                onChange={handleInputChange} />
            <button className="messageButton" type="submit">Send</button>
        </form>
    )
};
