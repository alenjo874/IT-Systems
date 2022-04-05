import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TicketCard from "./TicketCard";
import TicketResolve from "./TicketResolve";

function TicketPage() {
  const [ticketsArray, setTicketsArray] = useState([]);

  useEffect(() => {
    fetch("/tickets")
      .then((res) => res.json())
      .then(setTicketsArray);
  }, []);

  const displayTickets = ticketsArray.map((ticket) => {
    return <TicketCard key={uuidv4()} {...ticket} />;
  });
  return (
    <div className="ticket-page-container">
      <div className="ticket-card-container">
        <h4> Ticket Feed</h4>
        {displayTickets}
      </div>
      <div className="admin-tickets">
        <div className="upcoming-tickets">
          <h4> Next Ticket</h4>
        </div>
        <div className="current-ticket">
          <h4> Current Ticket</h4>
          <TicketResolve />
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
