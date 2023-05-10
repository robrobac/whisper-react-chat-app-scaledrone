import React, { createContext, useState, useEffect } from 'react';
import LoginScreen from './login/LoginScreen';
import ChatApp from './ChatApp';
import { ReactComponent as Logo } from './logo.svg';
import './responsive.scss'
import './App.scss'

export const ThemeContext = createContext(null);

export default function App() {
    const [user, setUser] = useState("");
    const [themeColor, setThemeColor] = useState("dark")

    // Dinamical App component height
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    const height100 = {
        height: viewportHeight,
    };

    useEffect(() => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // End of Dinamical App component height

    // Body class is added in order to color its background based on dark or light mode because on some mobile screens a white space is shown on the bottom. Something is pushing the .app background but not content
    const toggleTheme = () => {
        const body = document.getElementById('bodyElement');
        setThemeColor((current) => (current === "light" ? "dark" : "light"));

        if (body.classList.contains("dark")) {
            body.classList.remove("dark")
            body.classList.add("light")
            console.log(body);
        } else {
            body.classList.remove("light")
            body.classList.add("dark")
        }
    }

    //  Sets the Username and Color from Login Screen.
    const handleLogin = (username, color) => {
        setUser({ username, color });
    };

    return (
        <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
            <div className='app' id={themeColor} style={height100}>
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