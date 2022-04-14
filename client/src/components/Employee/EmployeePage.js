import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function EmployeePage({ inventoryArray, setTicketsArray, employeeArray }) {
  const [adminArray, setAdminArray] = useState([]);
  const [subject, setSubject] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [level, setLevel] = useState("Low");
  const [issue, setIssue] = useState("");
  const [caseCategory, setCaseCategory] = useState("Hardware");
  const [ticketConfirm, setTicketConfirm] = useState(false);

  useEffect(() => {
    fetch("/admins")
      .then((res) => res.json())
      .then(setAdminArray);
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

    // const newTicketObj = {
    //   admin_id: adminArray[0].id,
    //   employee_id: employeeArray[0].id,
    //   subject: subject,
    //   rental_id: inventoryItemObj.rentals[0].id,
    //   level: level,
    //   severity_level: severity_level,
    //   issue: issue,
    //   solution: "",
    //   complete: false,
    //   case_number: Math.floor(Math.random() * 1000000000),
    //   case_category: caseCategory,
    // };

    // fetch("/tickets", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTicketObj),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setTicketsArray((prev) => [...prev, data]);
    //   });

    setSubject("");
    setSerialNumber("");
    setLevel("Low");
    setIssue("");

    setTicketConfirm(true);
    setTimeout(() => {
      setTicketConfirm(false);
    }, 2500);
  }

  const ticketSubmitConfirmation = (
    <div className="update-pro-popup">
      <motion.div
        className="submit-confirm"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.25,
            type: "show",
            ease: "easeIn",
          },
        }}
        exit={{
          y: "10%",
          opacity: 0,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
      >
        <div className="cancel-container">
          {/* <button onClick={handleTicketDetailEdit}>Cancel</button> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="x-svg"
            onClick={() => setTicketConfirm(false)}
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>

        <div className="edit-btns">
          <p>Ticket Submitted</p>
        </div>
      </motion.div>
    </div>
  );

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
        <div className="form">
          <input
            type="text"
            className="form__input"
            placeholder=" "
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label className="form__label">Subject</label>
        </div>
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
        <div className="edit-btns">
          <button onClick={handleSubmitTicket}>Submit Ticket</button>
        </div>
      </form>
      <AnimatePresence>
        {ticketConfirm ? ticketSubmitConfirmation : null}
      </AnimatePresence>
    </div>
  );
}

export default EmployeePage;
