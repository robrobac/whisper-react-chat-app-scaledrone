import React, { createContext, useState, useEffect } from 'react';
import LoginScreen from './login/LoginScreen';
import ChatApp from './ChatApp';
import { ReactComponent as Logo } from './logo.svg';
import './responsive.scss'
import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
        } else {
            body.classList.remove("light")
            body.classList.add("dark")
        }
    }

    //  Sets the Username and Color from Login Screen.
    const handleLogin = (username, color) => {
        if (username.trim().length === 0) {
            // No empty names and more than one space
            return
        }
        setUser({ username, color });
    };

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
                <div className='app' id={themeColor} style={height100}>
                    <header>
                        <Logo className='logo' />
                    </header>
                    <Routes>
                        <Route path='/chat' element={user ? <ChatApp currentUser={user} /> : <Navigate to='/login' replace />} />

                        <Route path='/login' element={user ? <Navigate to='/chat' replace /> : <LoginScreen onLogin={handleLogin} />} />

                        <Route path='/' element={<Navigate to={user ? '/chat' : '/login'} replace />} />
                    </Routes>
                    <footer>
                        <p>Created by <span>Roberto Vukomanović</span>, 2023.</p>
                    </footer>
                </div>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
};