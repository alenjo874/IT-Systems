import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "../../style/images/search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

function NavBar() {
  const [showMoreNav, setShowMoreNav] = useState(false);

  function handleShowNav() {
    setShowMoreNav((prev) => !prev);
  }

  const moreNav = (
    <motion.div
      className="sidebar-nav-container"
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
        x: "-10%",
        opacity: 0,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <Link to="/" className="nav-elem">
        Main
      </Link>
      <Link to="/ticket" className="nav-elem">
        Ticket
      </Link>
      <Link to="/inventory" className="nav-elem">
        Inventory
      </Link>
      <Link to="/dashboard" className="nav-elem">
        Dashboard
      </Link>
    </motion.div>
  );

  /* <AnimatePresence>{showMoreNav ? moreNav : null}</AnimatePresence> */

  return (
    <div className="nav-container">
      {/* <div onClick={handleShowNav}>
        <FontAwesomeIcon icon={faBars} />
        {moreNav}
      </div> */}

      <div className="sidebar-nav-container">
        <div className="nav-icons">
          <img src={search} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
