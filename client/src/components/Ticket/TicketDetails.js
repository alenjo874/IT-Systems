import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function TicketDetails({
  id,
  subject,
  issue,
  create_date,
  level,
  rental_item,
  complete,
  case_number,
  editTicketPopUp,
  handleTicketDetailEdit,
  submitNewTicketDetails,
  handleTicketDelete,
  setNewSubject,
  newSubject,
  newIssue,
  setNewIssue,
}) {
  const newTicketObj = {
    subject: newSubject ? newSubject : subject,
    issue: newIssue ? newIssue : issue,
  };

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
        <div className="cancel-container">
          {/* <button onClick={handleTicketDetailEdit}>Cancel</button> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            onClick={handleTicketDetailEdit}
            className="x-svg"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>
        <form className="edit-item-form">
          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setNewSubject(e.target.value)}
              value={newSubject}
            />
            <label className="form__label edit-placeholder">Subject</label>
          </div>
          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setNewIssue(e.target.value)}
              value={newIssue}
            />
            <label className="form__label edit-placeholder">Case Issue</label>
          </div>
        </form>
        <div className="edit-btns">
          <button onClick={(e) => submitNewTicketDetails(e, newTicketObj, id)}>
            Submit Changes
          </button>
          <button onClick={(e) => handleTicketDelete(e, id)}>Delete</button>
        </div>
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
            <p> {!complete ? "New" : "Complete"} </p>
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
