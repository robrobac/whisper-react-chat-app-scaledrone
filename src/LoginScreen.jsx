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
        <main className='login'>
            <form onSubmit={handleSubmit} className='loginForm'>
                <label> Username:
                    <input className='usernameInput'
                        required
                        type='text'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </label>
                <label> Color:
                    <input className='colorInput'
                        type='color'
                        value={color}
                        onChange={handleColorChange}
                    />
                </label>
                <button className="loginButton" type="submit">Send</button>
            </form>
        </main>
    )
};