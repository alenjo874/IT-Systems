import React, { useState } from "react";
import { send } from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

function Email() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [confirmEmailSent, setConfirmEmailSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_3yu9ko8", "template_hbs9bjg", toSend, "88Gf9d8y15pb9xkOr")
      .then((response) => {})
      .catch((err) => {});

    setToSend({
      from_name: "",
      message: "",
      reply_to: "",
    });
    setConfirmEmailSent(true);
    // setTimeout(() => {
    //   setConfirmEmailSent(false);
    // }, 2500);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const emailSubmitConfirmation = (
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="x-svg"
            onClick={() => setConfirmEmailSent(false)}
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>

        <div className="edit-btns">
          <p>Email Submitted</p>
        </div>
      </motion.div>
    </div>
  );

  function SubmitEmail() {
    if (toSend.from_name && toSend.reply_to && toSend.message) {
      return (
        <button type="submit" className="view-work-btn">
          Submit
        </button>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="emails-container">
      <div className="email-tab-head">
        <h2 className="pages-name">Contact</h2>
        <p>
          Please send what your issue is, and an IT admin will assist shortly.
        </p>
      </div>
      <form className="email-form" onSubmit={onSubmit}>
        <div className="form">
          <input
            className="form__input"
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
            placeholder=" "
            autocomplete="off"
          />
          <label className="form__label edit-placeholder">Your Name</label>
        </div>

        <div className="form">
          <input
            className="form__input"
            type="text"
            name="reply_to"
            placeholder=" "
            autocomplete="off"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <label className="form__label edit-placeholder">Your Email</label>
        </div>
        <textarea
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <div className="edit-btns">
          <SubmitEmail />
        </div>
      </form>
      <AnimatePresence>
        {confirmEmailSent ? emailSubmitConfirmation : null}
      </AnimatePresence>
    </div>
  );
}

export default Email;
