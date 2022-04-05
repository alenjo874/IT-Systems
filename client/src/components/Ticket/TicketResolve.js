import React, { useState } from "react";

function TicketResolve({ id, issue, level }) {
  const [resolution, setResolution] = useState("");

  function handleResolveTicket(e) {
    e.preventDefault();

    fetch(`tickets/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        complete: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  return (
    <div className="ticket-resolve-container">
      {issue}
      {level}
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
