import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "./firebase";
import SendMessage from "./SendMessage";

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      //   .orderBy("createdAt")
      //   .limit(50)
      .onSnapshot((snapshot) => {
        //   console.log(snapshot.docs[0].data().text);
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  console.log(messages.map((message) => message.text));

  const displayTexts = messages.map((message) => {
    return (
      <div
        key={message.id}
        className={`msg ${
          message.uid === auth.currentUser.uid ? "sent" : "received"
        } message-bubble`}
      >
        <div className="chat-propic">
          <img src={message.photoURL} alt="profile"></img>
        </div>
        <p> {message.text} </p>
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
