import React, { useState } from "react";

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
            <label> Message
                <input className="messageInput"
                    required
                    type="text"
                    value={text}
                    onChange={handleInputChange} />
            </label>
            <button className="messageButton" type="submit">Send</button>
        </form>
    )
}
