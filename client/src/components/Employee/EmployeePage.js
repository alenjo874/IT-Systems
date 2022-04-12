import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function EmployeePage({ inventoryArray, setTicketsArray }) {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [adminArray, setAdminArray] = useState([]);
  const [subject, setSubject] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [level, setLevel] = useState("Low");
  const [issue, setIssue] = useState("");
  const [caseCategory, setCaseCategory] = useState("Hardware");

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

  const displaySerialOptions = inventoryArray.map((item) => {
    return (
      <option key={uuidv4()} value={item.serial_number}>
        {item.serial_number}
      </option>
    );
  });

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
      case_number: Math.floor(Math.random() * 1000000000),
      case_category: caseCategory,
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
        setTicketsArray((prev) => [...prev, data]);
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
        <p>
          Please fill out the form and an IT admin will assist shortly, thank
          you.
        </p>
      </div>
      <form>
        <label> Subject </label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        ></input>
        <label> Serial Number </label>
        <select
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        >
          {displaySerialOptions}
        </select>
        <label> Severity Level </label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="Critical">Critical</option>
        </select>
        <label> Category </label>
        <select
          value={caseCategory}
          onChange={(e) => setCaseCategory(e.target.value)}
        >
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Account">Account</option>
          <option value="Other">Other</option>
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
