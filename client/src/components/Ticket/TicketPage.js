import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TicketCard from "./TicketCard";
import TicketResolve from "./TicketResolve";
import TicketUpcoming from "./TicketUpcoming";

function TicketPage({ completedTickets, setCompletedTickets, setTicketsArray, ticketsArray }) {
  const nextTicket = ticketsArray[1];
  const currentTicket = ticketsArray[0];

  // ============================================================

  // TURN BACK TO FALSE

  function handleFalse(tickID) {
    fetch(`tickets/${tickID}`, {
      method: "PATCH",
      body: JSON.stringify({
        complete: false,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const displayCompleteTickets = completedTickets.map((ticket) => {
    return (
      <div key={uuidv4()}>
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
            setCompletedTickets={setCompletedTickets}
            setTicketsArray={setTicketsArray}
            ticketsArray={ticketsArray}
          />
        </div>
      </div>

      <div>{displayCompleteTickets}</div>
    </div>
  );
}

export default TicketPage;
