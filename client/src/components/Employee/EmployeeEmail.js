import React, { useState } from "react";
import Chat from "../Chat/Chat";
import ChatSignIn from "../Chat/ChatSignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Chat/firebase";
import { v4 as uuidv4 } from "uuid";
import Email from "../Email/Email";
import TicketCard from "../Ticket/TicketCard";

function EmployeeEmail({ allTicketsArray }) {
  const [user] = useAuthState(auth);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  console.log(allTicketsArray);

  const displayTickets = allTicketsArray.map((ticket) => {
    return <TicketCard key={uuidv4()} {...ticket} employeeSide={true} />;
  });

  return (
    <div className="emp-email-container">
      <div className="ticket-tab-container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Ticket Feed
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Email
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Chat
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="display-ticket card ticket-overflow">
              {displayTickets}
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Email />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            {user ? <Chat /> : <ChatSignIn />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeEmail;
