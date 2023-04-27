import React from "react";
import InputMessage from './InputMessage';
import Messages from './Messages';

export default function Chat(props) {
    const drone = props.drone
    const room = props.room
    
    const handleSendMessage = (text) => {
        drone.publish({
          room: "observable-room",
          message: text
        });
        console.log("New message sent:", text)
    }

    return (
        <main>
        <Messages room={room} />
        <InputMessage onSubmit={handleSendMessage} />
        </main>
    )
}
