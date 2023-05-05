import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat'
import './ChatApp.scss'

function ChatApp({currentUser}) {

    // Connecting to Scaledrone Channel
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

    // Subscribing to Scaledrone Channel Room
    const room = drone.subscribe('observable-room');
    room.on('open', error => {
        if (error) {
            console.log(error);
        } console.log("Subscribed to Room", room)
    });

    console.log("New user created - Username:", currentUser.username, ", Color:", currentUser.color);

    return (
        <div className='chatApp'>
            <Sidebar room={room} drone={drone}/>
            <div className='verticalDivider'></div>
            <Chat room={room} drone={drone} />
        </div>
    )
};

export default React.memo(ChatApp);