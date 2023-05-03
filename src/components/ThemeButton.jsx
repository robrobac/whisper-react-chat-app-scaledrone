import React, {useContext, useEffect, useState} from "react";
import { ThemeContext } from '../App';
import './ThemeButton.scss'
import { Switch } from "@mui/material";

export default function ThemeButton() {
    const { themeColor, toggleTheme } = useContext(ThemeContext);
    const [value, setValue] = useState(false);

    useEffect(() => {
        if (themeColor === "dark") {
            setValue(false)
        } else {
            setValue(true)
        }
    }, [themeColor])

    return (
        <div className="toggleThemeButton">
            <p>Dark</p>
            <Switch onChange={toggleTheme} checked={value} />
            <p>Light</p>
        </div>
    )
}

