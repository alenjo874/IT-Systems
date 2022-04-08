import React, { useState, useEffect } from "react";
import { db } from "./firebase";

function Chat() {
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
      <div key={message.id}>
        <img src={message.photoURL} alt="profile"></img>
        <p> {message.text} </p>
      </div>
    );
  });

  return (
    <div>
      {displayTexts}
    </div>
  );
}

export default Chat;
