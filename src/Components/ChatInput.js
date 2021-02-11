import React, { useState, useEffect } from "react";
import "../App.css";
export default function ChatInput({ setMessage }) {
  const [inputMessage, setInputMessage] = useState(true);

  return (
    <div className="sendBar">
      <input
        onChange={(event) => setInputMessage(event.target.value)}
        type="text"
        placeholder="Enter text..."
      />
      <button
        onClick={() => {
          setMessage(inputMessage);
        }}
      >
        Send
      </button>
    </div>
  );
}
