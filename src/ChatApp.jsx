import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat'
import './ChatApp.scss'


export default function ChatApp({currentUser}) {

    // CONNECTING TO SCALEDRONE
    const drone = new window.Scaledrone('gdFAiLaQOHNBawDl', {
        data: {
            name: currentUser.username,
            color: currentUser.color,
        }
    });
    drone.on('open', error => {
        if (error) {
            console.error(error);
        } console.log("Connected to Scaledrone", drone)
    });

    // SUBSCRIBING TO ROOM
    const room = drone.subscribe('observable-room');
    room.on('open', error => {
        if (error) {
            console.log(error);
        } console.log("Subscribed to Room", room)
    });

    console.log("New user created - Username:", currentUser.username, ", Color:", currentUser.color)

    return (
        <div className='chatApp'>
            <Sidebar room={room} drone={drone}/>
            <div className='verticalDivider'></div>
            <Chat room={room} drone={drone}/>
        </div>
  )
};