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
      <div>
        <div key={message.id} className={`msg ${message.uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
          <img src={message.photoURL} alt="profile"></img>
          <p> {message.text} </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      {displayTexts}
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
