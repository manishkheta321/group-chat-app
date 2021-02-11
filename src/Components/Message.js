import React, { useState, useEffect } from "react";
import "../App.css";
export default function Message({ message }) {
  console.log(message);
  const { username, text } = message;
  const fromMe = message.fromMe ? " from-me" : "";
  return (
    <div className={`message ${fromMe}`}>
      <div className="username">{username}</div>
      <div className="message-body">{text}</div>
    </div>
  );
}
