import React from "react";
import Chat from "../Chat/Chat";
import ChatSignIn from "../Chat/ChatSignIn";

function EmployeeEmail() {
  return (
    <div className="emp-email-container">
      <ChatSignIn />
      <Chat />
    </div>
  );
}

export default EmployeeEmail;
