import React, {useContext} from "react";
import { ThemeContext } from '../App';
import './ThemeButton.scss'

export default function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
        <button onClick={toggleTheme}>{theme}</button>
        </div>
    )
}