import React, { useState, useEffect } from "react";
import ChatApp from "./ChatApp";

export default function ChatHome() {
  const [user, setUser] = useState(null);
  const [value, setValue] = useState("");

  return (
    <>
      {user ? (
        <ChatApp username={user} />
      ) : (
        <div>
          <input
            onChange={(event) => setValue(event.target.value)}
            type="text"
            placeholder="Enter Username..."
          />
          <button
            onClick={() => {
              setUser(value);
            }}
          >
            Enter
          </button>
        </div>
      )}
    </>
  );
}
