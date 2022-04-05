import React, { useState } from "react";

function TicketUpcoming({ issue, level }) {
  function handlePickTicket() {}
  return (
    <div>
      <div>
        {issue} {level}
      </div>
      <button onClick={handlePickTicket}>Resolve Ticket</button>
    </div>
  );
}

export default TicketUpcoming;
