import React, { useState, useEffect } from "react";
import Message from "./Message";

export default function Messages (props) {
    const room = props.room;
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        room.on('message', message => {
            setMessages(messages => [...messages, message]);
            console.log("New Message received:", message)
        });
    }, [room]);
    
    useEffect(() => {
        room.on('member_join', (member) => {
            const notificationId = Date.now();
            const notification = {
                "data": member.clientData.name + " joined the chat!",
                "id": notificationId,
                "member": {
                    "clientData": {
                        "name": "notification",
                        "color": "#000000"
                    }
                }
            }
            setMessages(messages => [...messages, notification]);
            console.log("New Notification received:", notification)
        });

        room.on('member_leave', (member) => {
            const notificationId = Date.now();
            const notification = {
                "data": member.clientData.name + " left the chat!",
                "id": notificationId,
                "member": {
                    "clientData": {
                        "name": "notification",
                        "color": "#000000"
                    }
                }
            }
            setMessages(messages => [...messages, notification]);
            
            console.log("New Notification received:", notification)

            return () => {
                room.off("members");
                room.off("member_join");
                room.off("member_leave");
              };
        });
    }, [room]);
    
    return (
        <div>
            <ul>
                {messages.map((message) => (
                    <Message key={message.id} text={message.data} author={message.member.clientData.name}/>
                ))}
            </ul>
        </div>
    )
};
