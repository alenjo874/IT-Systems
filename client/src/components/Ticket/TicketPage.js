import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CaseDetails from "./CaseDetails";
import TicketCard from "./TicketCard";
import TicketDetails from "./TicketDetails";
import TicketResolve from "./TicketResolve";
import TicketUpcoming from "./TicketUpcoming";

function TicketPage({
  completedTickets,
  setCompletedTickets,
  setTicketsArray,
  ticketsArray,
}) {
  const [moreDetailTicket, setMoreDetailTicket] = useState([]);
  const nextTicket = ticketsArray[1];
  const currentTicket = ticketsArray[0];

  function handleMoreDetail(ticketId) {
    const detailTicketObj = ticketsArray.find(
      (ticket) => ticket.id === ticketId
    );
    setMoreDetailTicket(detailTicketObj);
  }

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
    return (
      <TicketCard
        key={uuidv4()}
        {...ticket}
        handleMoreDetail={handleMoreDetail}
      />
    );
  });

  // ============================================================

  return (
    <div className="ticket-page-container">
      <div className="incident-incomplete">
        <div>
          <div className="ticket-section incident-details">
            <h4 className="ticket-label">Ticket Details</h4>
            <TicketDetails {...currentTicket} />
            <div>{displayCompleteTickets}</div>
          </div>
          <div className="ticket-section incident-details">
            <h4 className="ticket-label">Contact Details</h4>
            <CaseDetails {...currentTicket} />
           
          </div>
        </div>
        <div className="admin-tickets">
          <div className="upcoming-tickets ticket-section">
            <h4 className="ticket-label">Next Ticket</h4>
            <TicketUpcoming
              {...nextTicket}
              handleMoreDetail={handleMoreDetail}
            />
          </div>
          <div className="current-ticket ticket-section">
            <h4 className="ticket-label">Current Ticket</h4>
            <TicketResolve
              handleMoreDetail={handleMoreDetail}
              {...currentTicket}
              setCompletedTickets={setCompletedTickets}
              setTicketsArray={setTicketsArray}
              ticketsArray={ticketsArray}
            />
          </div>
        </div>
      </div>
      <div className="ticket-card-container">
        <div className="ticket-section">
          <h4 className="ticket-label"> Ticket Feed</h4>
          <div className="display-ticket"> {displayTickets} </div>
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
