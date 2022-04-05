import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TicketCard from "./TicketCard";
import TicketResolve from "./TicketResolve";
import TicketUpcoming from "./TicketUpcoming";

function TicketPage() {
  const [ticketsArray, setTicketsArray] = useState([]);
  const [nextTicket, setNextTicket] = useState({});
  const [currentTicket, setCurrentTicket] = useState({});

  useEffect(() => {
    fetch("/incomplete_tickets")
      .then((res) => res.json())
      .then((data) => {
        setTicketsArray(data);
        setCurrentTicket(data[0]);
        setNextTicket(data[1]);
      });
  }, []);

  const filterOutNextTicket = ticketsArray.filter(
    (ticket) => ticket.id !== nextTicket.id && ticket.id !== currentTicket.id
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
          <TicketResolve {...currentTicket} />
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
