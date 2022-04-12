import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "./firebase.js";

function ChatSignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="log-action-container">
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

export default ChatSignIn;
