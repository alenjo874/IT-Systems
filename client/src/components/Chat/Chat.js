import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "./firebase";
import SendMessage from "./SendMessage";
import { v4 as uuidv4 } from "uuid";

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const displayTexts = messages.map((message) => {
    return (
      <div
        className={`msg ${
          message.uid === auth.currentUser.uid
            ? "sent-container"
            : "received-container"
        }`}
        key={uuidv4()}
      >
        <div
          className={`msg ${
            message.uid === auth.currentUser.uid ? "sent" : "received"
          } message-bubble`}
        >
          <div className="chat-propic">
            <img src={message.photoURL} alt="profile"></img>
          </div>
          <p className="text-message"> {message.text} </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="chat-container">
        {displayTexts} <SendMessage scroll={scroll} />
      </div>

      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
