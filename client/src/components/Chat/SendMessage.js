import React, { useState } from "react";
import { db, auth } from "./firebase";
import firebase from "firebase/compat/app";

function SendMessage() {
  const [newMessage, setNewMessage] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: newMessage,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setNewMessage("");
  }
  return (
    <div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          placeholder="message"
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        ></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
