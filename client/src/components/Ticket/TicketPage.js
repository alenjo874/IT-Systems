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
        {displayTickets}
      </div>
    </div>
  );
}

export default TicketPage;
