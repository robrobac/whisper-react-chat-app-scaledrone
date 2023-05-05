import React, { useState, useEffect } from "react";
import User from "../components/User";
import './Users.scss'

export default function Users(props) {
  const [users, setUsers] = useState([]);

  const room = props.room;
  const currentUserId = room.scaledrone.clientId;
  const currentUser = users.filter((user) => user.id === currentUserId);
  const otherUsers = users.filter((user) => user.id !== currentUserId);

    useEffect(() => {
        room.on("members", function (members) {
            setUsers(members);
        });

        room.on("member_join", function (member) {
            setUsers((users) => [...users, member]);
        });

        room.on("member_leave", function (member) {
            setUsers((users) => users.filter((user) => user.id !== member.id));
        });

        return () => {
            room.off("members");
            room.off("member_join");
            room.off("member_leave");
        };
  }, [room]);

  console.log("Currently online Users:", users);
  
  return (
    <div className="users">
        {currentUser.length > 0 && (
            <ul className="currentUser">
                <User
                    key={currentUser[0].id}
                    name={currentUser[0].clientData.name}
                    color={currentUser[0].clientData.color}
                />
            </ul>
        )}
        <p className="online">Currently Online</p>
        <ul className="usersList">
            {otherUsers.map((user) => (
                <User
                    key={user.id}
                    name={user.clientData.name}
                    color={user.clientData.color}
                />
            ))}
        </ul>
    </div>
  )
};
