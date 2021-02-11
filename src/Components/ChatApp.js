import React, { useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import io from "socket.io-client";

var socket = io("http://localhost:4000/");
export default function ChatApp({ username }) {
  const user = username;

  const [messages, setMessages] = useState([]);
  socket.on("server:message", (message) => {
    console.log(message);
    addMessage(message);
  });

  function setMessage(text) {
    console.log(text);
    const messageObject = {
      username: user,
      text: text,
      fromMe: true,
    };
    socket.emit("client:message", messageObject);
    addMessage(messageObject);
  }
  function addMessage(message) {
    // setMessages([...messages, message]);
    setMessages(messages.concat(message));
    console.log(messages);
  }
  return (
    <div>
      <Messages messages={messages} />
      <ChatInput setMessage={setMessage} />
    </div>
  );
}
