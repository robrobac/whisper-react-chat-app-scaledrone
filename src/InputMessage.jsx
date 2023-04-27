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
        <form onSubmit={handleSubmit}>
            <label> Message
                <input
                    required
                    type="text"
                    value={text}
                    onChange={handleInputChange} />
            </label>
            <button type="submit">Send</button>
        </form>
    )
}
