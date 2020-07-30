import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hey There."
        timestamp="30 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Allen"
        message="Hey Omi"
        timestamp="50 seconds ago"
        profilePic="..."
      />

      <Chat
        name="Jonas"
        message="Hey Martha"
        timestamp="2 seconds ago"
        profilePic="..."
      />

      <Chat
        name="Martha"
        message="Hey Jonas"
        timestamp="15 seconds ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;
