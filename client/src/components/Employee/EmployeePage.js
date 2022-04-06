import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EmployeePage({ inventoryArray }) {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [adminArray, setAdminArray] = useState([]);

  const [subject, setSubject] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [level, setLevel] = useState("Low");
  const [issue, setIssue] = useState("");

  useEffect(() => {
    fetch("/admins")
      .then((res) => res.json())
      .then(setAdminArray);
  }, []);

  useEffect(() => {
    fetch("/employees")
      .then((res) => res.json())
      .then(setEmployeeArray);
  }, []);

  function handleSubmitTicket(e) {
    e.preventDefault();
    const inventoryItemObj = inventoryArray.find((item) => {
      return item.serial_number === parseInt(serialNumber);
    });

    let severity_level = "";

    if (level === "Low") {
      severity_level = 1;
    } else if (level === "Moderate") {
      severity_level = 2;
    } else {
      severity_level = 3;
    }

    const newTicketObj = {
      admin_id: adminArray[0].id,
      employee_id: employeeArray[0].id,
      subject: subject,
      rental_id: inventoryItemObj.rentals[0].id,
      level: level,
      severity_level: severity_level,
      issue: issue,
      solution: "",
      complete: false,
    };

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

    setSubject("");
    setSerialNumber("");
    setLevel("Low");
    setIssue("");
  }

  return (
    <div className="employee-container">
      <div className="employee-header">
        <h4>Submit Ticket Here</h4>
        <p>Please fill out the form and an IT admin will assist shortly, thank you.</p>
        <Link to="/login">
          <button>Logout</button>
        </Link>
      </div>
      <form>
        <label> Subject </label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        ></input>
        <label> Serial Number </label>
        <input
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        ></input>
        <label> Severity Level </label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="Critical">Critical</option>
        </select>
        <label> Issue </label>
        <textarea
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        ></textarea>
        <button onClick={handleSubmitTicket}>Submit Ticket</button>
      </form>
    </div>
  );
}

export default EmployeePage;
