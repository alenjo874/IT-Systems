import React from "react";
import { auth } from "./firebase.js";

function ChatSignOut() {
  function singOutWithGoogle() {
     auth.signOut();
  }
  return (
    <div>
      <button onClick={singOutWithGoogle}>Sign Out</button>
    </div>
  );
}

export default ChatSignOut;
