import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Chat from "../Chat/Chat";
import ContactDetails from "./ContactDetails";
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
  // ============================================================
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
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="ticket-page-container">
      <div className="incident-incomplete">
        <div className="ticket-case-details-container">
          <div className="ticket-section incident-details">
            <h4 className="ticket-label">Ticket Details</h4>
            <TicketDetails {...currentTicket} />
          </div>
          <div className="ticket-section incident-details">
            <h4 className="ticket-label">Contact Details</h4>
            <ContactDetails {...currentTicket} />
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
      {/* <div className="ticket-card-container">
        <div className="ticket-section">
          <h4 className="ticket-label"> Ticket Feed</h4>
          <div className="display-ticket card"> {displayTickets} </div>
        </div>
      </div> */}
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
            Resolved
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
            <div className="display-ticket card"> {displayTickets} </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
           
            <div>{displayCompleteTickets}</div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
          
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
