import React from "react";
import Users from "./Users";

export default function Sidebar (props) {
    const drone = props.drone;
    const room = props.room;
    
    return (
        <aside className="sidebar">
            <Users room={room} drone={drone}/>
        </aside>
    )
};