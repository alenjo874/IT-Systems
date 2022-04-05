import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TicketCard from "./TicketCard";

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
        Ticket Feed
        {displayTickets}
      </div>
      <div className="admin-tickets">
      <div className="upcoming-tickets">
      Next Ticket
      </div>
      <div className="current-ticket" >
      Current Ticket
      </div>
      </div>
    </div>
  );
}

export default TicketPage;
