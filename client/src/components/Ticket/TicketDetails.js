import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function TicketDetails({
  subject,
  issue,
  create_date,
  level,
  rental_item,
  complete,
  case_number,
  editTicketPopUp,
  handleTicketDetailEdit,
}) {
  const [newSubject, setNewSubject] = useState(subject);
  const [newIssue, setNewIssue] = useState(issue);

  console.log(subject, issue);
  console.log(newSubject, newIssue);

  const editTicketDetail = (
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
        <form className="edit-item-form">
          <label>Subject</label>
          <input
            onChange={(e) => setNewSubject(e.target.value)}
            value={newSubject}
          ></input>
          <label>Case Issue</label>
          <input
            onChange={(e) => setNewIssue(e.target.value)}
            value={newIssue}
          ></input>

          <button>Submit Changes</button>
          <button onClick={handleTicketDetailEdit}>Cancel</button>
        </form>
      </motion.div>
    </div>
  );
  return (
    <div className="ticket-details card">
      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Case Number</p>
            <p> {case_number} </p>
          </div>
        </div>
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Case Priority</p>
            <p
              className={
                level === "Low"
                  ? "green"
                  : level === "Moderate"
                  ? "yellow"
                  : "red"
              }
            >
              {level}
            </p>
          </div>
        </div>
      </div>
      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Case Date</p>
            <p> {create_date} </p>
          </div>
        </div>
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Case Status</p>
            <p> {!complete ? "New" : null} </p>
          </div>
        </div>
      </div>

      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Subject</p>
          <p> {subject} </p>
        </div>
      </div>
      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Case Issue</p>
          <p> {issue} </p>
        </div>
      </div>
      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Product</p>
          <p> {rental_item ? rental_item.name : null} </p>
        </div>
      </div>
      <AnimatePresence>
        {editTicketPopUp ? editTicketDetail : null}
      </AnimatePresence>
    </div>
  );
}

export default TicketDetails;
