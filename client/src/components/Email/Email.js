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
    setTimeout(() => {
      setConfirmEmailSent(false);
    }, 2500);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="pages-container" id="contact">
      <div className="email-tab-head">
        <h2 className="pages-name">Contact</h2>
        <p>
          Please send what your issue is, and an IT admin will assist shortly.
        </p>
      </div>
      <form className="email-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={toSend.from_name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="reply_to"
          placeholder="Your Email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <div className="edit-btns">
          <button type="submit" className="view-work-btn">
            Submit
          </button>
        </div>
      </form>
      <AnimatePresence>
        {confirmEmailSent ? (
          <div className="email-confirm-container">
            <motion.div
              className="email-popup"
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
              <p>Email sent, thank you for your time!</p>
              <div>
                <button
                  onClick={(e) => setConfirmEmailSent(false)}
                  className="hide-button"
                >
                  X
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Email;
