import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

function EmployeeNavBar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <motion.ul
          className="navbar-nav"
          initial={{ x: -25 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.26,
              type: "show",
              ease: "easeIn",
            },
          }}
        >
          <li className="nav-item">
            <Link to="/employee" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M128 160H448V352H128V160zM512 64C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128C0 92.65 28.65 64 64 64H512zM96 352C96 369.7 110.3 384 128 384H448C465.7 384 480 369.7 480 352V160C480 142.3 465.7 128 448 128H128C110.3 128 96 142.3 96 160V352z" />
              </svg>
              <p className="link-text">Ticket</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/inventory" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M128 96h384v256h64v-272c0-26.38-21.62-48-48-48h-416c-26.38 0-48 21.62-48 48V352h64V96zM624 383.1h-608c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.2 632.8 383.1 624 383.1z" />
              </svg>
              <p className="link-text">Contact</p>
            </Link>
          </li>

        </motion.ul>
      </nav>
    </div>
  );
}

export default EmployeeNavBar;
