import React, { useState, useEffect, useRef } from "react";
import Message from "../components/Message";
import './Messages.scss'

export default function Messages (props) {
    const [messages, setMessages] = useState([]);

    const room = props.room;
    const currentUserId = props.room.scaledrone.clientId;
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    useEffect(() => {
        room.on('message', message => {
            const messageSound = new Audio("/messageNotification.mp3");
            messageSound.volume = 0.1;
            setMessages(messages => [...messages, message]);
            messageSound.play();
            console.log("New Message received:", message);
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
            };
            setMessages(messages => [...messages, notification]);
            console.log("New Notification received:", notification);
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
            };
            setMessages(messages => [...messages, notification]);
            console.log("New Notification received:", notification);
            return () => {
                room.off("members");
                room.off("member_join");
                room.off("member_leave");
              };
        });
    }, [room]);
    
    return (
        <div className="messages">
            <ul className="messagesList">
                {messages.map((message) => (
                    <Message
                        key={message.id}
                        text={message.data}
                        authorId={message.member.id}
                        author={message.member.clientData.name}
                        time={message.timestamp}
                        currentUser={currentUserId}
                        color={message.member.clientData.color}/>
                ))}
                <div ref={messagesEndRef} />
            </ul>
        </div>
    )
};
