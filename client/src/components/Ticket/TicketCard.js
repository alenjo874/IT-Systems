import React from "react";

function TicketCard({ subject, level, issue }) {
  return (
    <div className="ticket-card">
      <div className="ticket-head">
        <p>{subject}</p>
        <p>{level}</p>
      </div>
      <div>
        {issue}
      </div>
    </div>
  );
}

export default TicketCard;
