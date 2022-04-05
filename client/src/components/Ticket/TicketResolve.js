import React, { useState } from "react";

function TicketResolve() {
  const [resolution, setResolution] = useState("");

  return (
    <div className="ticket-resolve-container">
      <form>
        <label>Incident Resolution</label>
        <textarea
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TicketResolve;
