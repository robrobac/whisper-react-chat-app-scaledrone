import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import ChatApp from './ChatApp';
import './App.scss'

export default function App() {
    const [user, setUser] = useState("");

    const handleLogin = (username, color) => {
        setUser({ username, color });
    };

    return (
        <div className='app'>
            <header>
                <h1>Whisper App</h1>
            </header>

            {user ? (<ChatApp currentUser={user} />) : (<LoginScreen onLogin={handleLogin} />)}

            <footer>
                <p>Created by <span>Roberto Vukomanović</span>, 2023.</p>
            </footer>
        </div>
    )
};