import React, { useState, useEffect } from "react";
import Message from "./Message";
import "../App.css";
const Messages = (props) => {
  console.log(props.messages);
  return (
    <div className="Messages">
      {props.messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};
export default Messages;
