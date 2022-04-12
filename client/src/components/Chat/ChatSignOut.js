import React from "react";
import { auth } from "./firebase.js";

function ChatSignOut() {
  function singOutWithGoogle() {
     auth.signOut();
  }
  return (
    <div className="log-action-container">
      <button onClick={singOutWithGoogle}>Sign Out</button>
    </div>
  );
}

export default ChatSignOut;
