import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TicketCard from "./TicketCard";
import TicketResolve from "./TicketResolve";
import TicketUpcoming from "./TicketUpcoming";
import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";

function TicketPage() {
  const [ticketsArray, setTicketsArray] = useState([]);
  const [completedTickets, setCompletedTickets] = useState([]);

  useEffect(() => {
    fetch("/incomplete_tickets")
      .then((res) => res.json())
      .then((data) => {
        setTicketsArray(data);
      });
  }, []);

  const nextTicket = ticketsArray[0];
  const currentTicket = ticketsArray[1];

  // ============================================================

  // TURN BACK TO FALSE

  useEffect(() => {
    fetch("/complete_tickets")
      .then((res) => res.json())
      .then(setCompletedTickets);
  }, []);

  function handleFalse(tickID) {
    fetch(`tickets/${tickID}`, {
      method: "PATCH",
      body: JSON.stringify({
        complete: false,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  const displayCompleteTickets = completedTickets.map((ticket) => {
    return (
      <div>
        <p>{ticket.issue}</p>
        <button onClick={(e) => handleFalse(ticket.id)}>False </button>
      </div>
    );
  });

  // ============================================================

  const filterOutNextTicket = ticketsArray.filter(
    (ticket) => ticket.id !== nextTicket.id && ticket.id !== currentTicket.id
  );

  const displayTickets = filterOutNextTicket.map((ticket) => {
    return <TicketCard key={uuidv4()} {...ticket} />;
  });

  // ============================================================


  const authKey = "d82fc71a268113db7b4e85aa8a9ccccd534d4ac5";
  const uid = "it-admin";
  CometChat.login(uid, authKey).then(
    (user) => {
      console.log("Login Successful:", { user });
    },
    (error) => {
      console.log("Login failed with exception:", { error });
    }
  );

  return (
    <div className="ticket-page-container">
      <div className="ticket-card-container">
        <div className="ticket-section">
          <h4 className="ticket-label"> Ticket Feed</h4>
          <div className="display-ticket"> {displayTickets} </div>
        </div>
      </div>
      <div className="admin-tickets">
        <div className="upcoming-tickets ticket-section">
          <h4 className="ticket-label"> Next Ticket</h4>
          <TicketUpcoming {...nextTicket} />
        </div>
        <div className="current-ticket ticket-section">
          <h4 className="ticket-label"> Current Ticket</h4>
          <TicketResolve
            {...currentTicket}
            setTicketsArray={setTicketsArray}
            ticketsArray={ticketsArray}
          />
        </div>
      </div>

      <div>{displayCompleteTickets}</div>
      <div style={{ width: "800px", height: "800px" }}>
        <CometChatUI />
      </div>
    </div>
  );
}

export default TicketPage;
