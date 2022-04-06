import React, { useState } from "react";

function TicketResolve({ id, issue, level, setTicketsArray, ticketsArray }) {
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
    });

    const incompleteTicketArr = ticketsArray.filter(
      (ticket) => ticket.id !== id
    );
    setTicketsArray(incompleteTicketArr);
  }

  return (
    <div className="ticket-resolve-container">
      <div>
        <p>{issue}</p>

        <p
          className={
            level === "Low" ? "green" : level === "Moderate" ? "yellow" : "red"
          }
        >
          {level}
        </p>
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
