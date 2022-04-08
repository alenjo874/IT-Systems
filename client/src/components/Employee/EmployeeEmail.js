import React from "react";
import Chat from "../Chat/Chat";
import ChatSignIn from "../Chat/ChatSignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Chat/firebase";
import ChatSignOut from "../Chat/ChatSignOut";

function EmployeeEmail() {
  const [user] = useAuthState(auth);

  return (
    <div className="emp-email-container">
      {user ? <Chat /> : <ChatSignIn />}
      <ChatSignOut />
    </div>
  );
}

export default EmployeeEmail;
