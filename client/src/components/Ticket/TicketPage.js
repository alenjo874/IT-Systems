import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TicketCard from "./TicketCard";
import TicketResolve from "./TicketResolve";
import TicketUpcoming from "./TicketUpcoming";

function TicketPage() {
  const [ticketsArray, setTicketsArray] = useState([]);
  const [nextTicket, setNextTicket] = useState({});

  useEffect(() => {
    fetch("/tickets")
      .then((res) => res.json())
      .then((data) => {
        setTicketsArray(data);
        setNextTicket(data[0]);
      });
  }, []);

  const incompleteTickets = ticketsArray.filter((ticket) => !ticket.complete);

  const filterOutNextTicket = incompleteTickets.filter(
    (ticket) => ticket.id !== nextTicket.id
  );

  const displayTickets = filterOutNextTicket.map((ticket) => {
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
          <TicketUpcoming {...nextTicket} />
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
