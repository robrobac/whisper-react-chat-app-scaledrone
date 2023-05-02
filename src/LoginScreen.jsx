import React, { useState } from 'react';
import './LoginScreen.scss'

export default function LoginScreen({ onLogin }) {
    const [username, setUsername] = useState("");
    const [color, setColor] = useState(randomColor());

    function randomColor() {
        return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      }

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
        <main className='loginScreen'>

            <h2>
            Welcome to <span>Whisper</span> chat application.
            </h2>

            <form onSubmit={handleSubmit} className='loginForm'>

                <p>
                    Please choose your <span>username</span> and <span>colour</span> and press Enter to join the Chat.
                </p>

                <hr></hr>

                <label className='inputLabel'>
                    Username
                    <input className='formInput'
                        id='username'
                        required
                        type='text'
                        value={username}
                        onChange={handleUsernameChange}
                        maxLength="20"
                    />
                </label>
                
                <label className='inputLabel'>
                    Color:
                    <input className='formInput'
                        id='color'
                        type='color'
                        value={color}
                        onChange={handleColorChange}
                    />
                </label>

                <button className="loginButton" type="submit">Send</button>

            </form>
            <p>
            Please remember to treat others with <span>kindness</span> and <span>respect</span>. We believe that a <span>positive</span> and <span>respectful</span> community is crucial to creating a great experience for everyone involved.
            </p>
        </main>
    )
};