import React, { createContext, useState } from 'react';
import LoginScreen from './login/LoginScreen';
import ChatApp from './ChatApp';
import { ReactComponent as Logo } from './logo.svg';
import './responsive.scss'

import './App.scss'

export const ThemeContext = createContext(null);

export default function App() {
    const [user, setUser] = useState("");
    const [themeColor, setThemeColor] = useState("dark")

    const toggleTheme = () => {
        setThemeColor((current) => (current === "light" ? "dark" : "light"))
    }

    //  Sets the Username and Color from Login Screen.
    const handleLogin = (username, color) => {
        setUser({ username, color });
    };

    return (
        <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
            <div className='app' id={themeColor}>
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