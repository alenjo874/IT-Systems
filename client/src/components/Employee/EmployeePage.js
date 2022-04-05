import React, { useState } from "react";

function EmployeePage() {
  const [subject, setSubject] = useState("");

  function handleSubmitTicket() {
    const newTicketObj = { subject };

    fetch("/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicketObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  }

  return (
    <div className="employee-container">
      <form>
        <label> Subject </label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        ></input>
        <button onClick={handleSubmitTicket}>Submit Ticket</button>
      </form>
    </div>
  );
}

export default EmployeePage;
