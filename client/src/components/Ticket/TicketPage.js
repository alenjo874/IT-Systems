import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Chat from "../Chat/Chat";
import { auth } from "../Chat/firebase";
import ChatSignOut from "../Chat/ChatSignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatSignIn from "../Chat/ChatSignIn";
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
  // const [moreDetailTicket, setMoreDetailTicket] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const [editTicketPopUp, setEditTickPopUp] = useState(false);

  const nextTicket = ticketsArray[1];
  const currentTicket = ticketsArray[0];
  const [user] = useAuthState(auth);

  // function handleMoreDetail(ticketId) {
  //   const detailTicketObj = ticketsArray.find(
  //     (ticket) => ticket.id === ticketId
  //   );
  //   setMoreDetailTicket(detailTicketObj);
  // }
  function handleTicketDetailEdit(e) {
    e.preventDefault();
    setEditTickPopUp((prev) => !prev);
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
      <div className="ticket-card" key={uuidv4()}>
        <div className="ticket-head">
          <p>Case: {ticket.case_number}</p>
        </div>
        <div className="shared-subsection">
          <div className="ticket-subsections two-col">
            <div>
              <p className="detail-label">Subject</p>
              <p> {ticket.subject} </p>
            </div>
          </div>
          <div className="ticket-subsections two-col">
            <div>
              <p className="detail-label">Case Priority</p>
              <p
                className={
                  ticket.level === "Low"
                    ? "green"
                    : ticket.level === "Moderate"
                    ? "yellow"
                    : "red"
                }
              >
                {ticket.level}
              </p>
            </div>
          </div>
        </div>
        <div className="ticket-subsections">
          <div>
            <p className="detail-label">Case Issue</p>
            <p> {ticket.issue} </p>
          </div>
        </div>
        <div className="ticket-subsections">
          <div>
            <p className="detail-label">Case Solution</p>
            <p> {ticket.solution} </p>
          </div>
        </div>
        <div>
          <p className="detail-label">Reopen Ticket</p>
          <button onClick={() => handleFalse(ticket.id)}>Submit</button>
        </div>
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

  const toggleTab = (index) => {
    setToggleState(index);
  };

  function submitNewTicketDetails(e, ticketObj, ticketID) {
    e.preventDefault();
    fetch(`/tickets/${ticketID}`, {
      method: "PATCH",
      body: JSON.stringify({ ...ticketObj }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const updatedTicketsArray = ticketsArray.map((ticket) => {
      if (ticket.id === ticketID) {
        return { ...ticket, ...ticketObj };
      } else {
        return ticket;
      }
    });

    setTicketsArray(updatedTicketsArray);
    setEditTickPopUp(false);
  }

  function handleTicketDelete(e, ticketId) {
    e.preventDefault();
    fetch(`tickets/${ticketId}`, {
      method: "DELETE",
    });

    const newDeleteTicketArray = ticketsArray.filter(
      (ticket) => ticket.id !== ticketId
    );
    setTicketsArray(newDeleteTicketArray);
    setEditTickPopUp(false);
  }

  return (
    <div className="ticket-page-container">
      <div className="incident-incomplete">
        <div className="ticket-case-details-container">
          <div className="ticket-section incident-details">
            <div className="ticket-label-container">
              <h4 className="ticket-label">Ticket Details</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="edit-svg"
                onClick={handleTicketDetailEdit}
              >
                <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
              </svg>
            </div>
            <TicketDetails
              {...currentTicket}
              editTicketPopUp={editTicketPopUp}
              handleTicketDetailEdit={handleTicketDetailEdit}
              submitNewTicketDetails={submitNewTicketDetails}
              handleTicketDelete={handleTicketDelete}
            />
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
              // handleMoreDetail={handleMoreDetail}
            />
          </div>
          <div className="current-ticket ticket-section">
            <h4 className="ticket-label">Current Ticket</h4>
            <TicketResolve
              // handleMoreDetail={handleMoreDetail}
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
            <div className="display-ticket card">{displayCompleteTickets}</div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            {user ? <Chat /> : <ChatSignIn />}
            <ChatSignOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
