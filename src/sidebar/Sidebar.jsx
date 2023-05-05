import React, {useState} from "react";
import Users from "./Users";
import './Sidebar.scss'
import ThemeButton from "../components/ThemeButton";
import { ReactComponent as SidebarButton } from '../sidebarButton.svg';

export default function Sidebar (props) {
    const [showSidebar, setShowSidebar] = useState(false);
    
    const drone = props.drone;
    const room = props.room;
    
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <aside className={showSidebar ? 'sidebar show' : 'sidebar'}>
            <div style={{ width: '20px' }}></div>
            <div className="sidebarContainer">
                <Users room={room} drone={drone}/>
                <div className="toggleButtonContainer">
                <ThemeButton />
                </div>
            </div>
            <div className="sidebarButtonContainer">
                <button className="sidebarToggleButton" onClick={toggleSidebar}>
                    <SidebarButton />
                </button>
            </div>
        </aside>
    )
};