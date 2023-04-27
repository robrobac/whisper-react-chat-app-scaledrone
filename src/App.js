import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import ChatApp from './ChatApp';

export default function App() {
    const [user, setUser] = useState("");

    const handleLogin = (username, color) => {
        setUser({ username, color });
    };

    return (
        <div>
            <header>Header</header>
            {user ? (<ChatApp currentUser={user} />) : (<LoginScreen onLogin={handleLogin} />)}
            <footer>Footer</footer>
        </div>
    )
};