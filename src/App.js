import React, { createContext, useState } from 'react';
import LoginScreen from './login/LoginScreen';
import ChatApp from './ChatApp';
import { ReactComponent as Logo } from './logo.svg';
import './App.scss'

export const ThemeContext = createContext(null);

export default function App() {
    const [user, setUser] = useState("");
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"))
    }

    //  Sets the Username and Color from Login Screen.
    const handleLogin = (username, color) => {
        setUser({ username, color });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className='app' id={theme}>
                <header>
                    <Logo className='logo' />
                </header>

                {user ? (<ChatApp currentUser={user} />) : (<LoginScreen onLogin={handleLogin} />)}

                <footer>
                    <p>Created by <span>Roberto Vukomanović</span>, 2023.</p>
                </footer>
            </div>
        </ThemeContext.Provider>
    )
};