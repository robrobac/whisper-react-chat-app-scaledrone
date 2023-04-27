import React, { useState } from 'react';

export default function LoginScreen({ onLogin }) {
    const [username, setUsername] = useState("");
    const [color, setColor] = useState("#000000");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(username, color);
        console.log("New user submited - Username:", username, ", color:", color)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input
                        required
                        type='text'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </label>
                <label> Color:
                    <input
                        type='color'
                        value={color}
                        onChange={handleColorChange}
                    />
                </label>
            </form>

        </div>
    )
};