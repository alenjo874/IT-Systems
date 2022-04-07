import React, { useState } from "react";

function TicketResolve({
  id,
  issue,
  level,
  setTicketsArray,
  ticketsArray,
  setCompletedTickets,
  handleMoreDetail,
  subject,
}) {
  const [resolution, setResolution] = useState("");

  function handleResolveTicket(e) {
    e.preventDefault();

    fetch(`tickets/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        complete: true,
        solution: resolution,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCompletedTickets((prev) => [...prev, data]));

    const incompleteTicketArr = ticketsArray.filter(
      (ticket) => ticket.id !== id
    );
    setTicketsArray(incompleteTicketArr);
  }

  return (
    <div className="ticket-resolve-container card">
      <div className="resolve-details">
        <div className="ticket-subsections">
          <div>
            <p className="detail-label">Subject</p>
            <p> {subject} </p>
          </div>
        </div>
        <div className="ticket-subsections">
          <div>
            <p className="detail-label">Case Issue</p>
            <p>{issue}</p>
          </div>
        </div>
      </div>
      <form>
        <label>Incident Resolution</label>
        <textarea
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        />
        <button onClick={handleResolveTicket}>Submit Solution</button>
      </form>
    </div>
  );
}

export default TicketResolve;
