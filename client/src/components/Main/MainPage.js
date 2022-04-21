import React from "react";
import {
  computerSvg,
  ticketSvg,
  inventorySvg,
  dashboardSvg,
} from "./mainSvgSource";
import { motion } from "framer-motion/dist/framer-motion";

function MainPage() {
  const scrollRightAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.24, duration: 0.6 },
    variants: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
      ease: "easeIn",
    },
  };

  const scrollLeftAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.24, duration: 0.6 },
    variants: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
      ease: "easeIn",
    },
  };

  return (
    <div className="main-page-container">
      <div className="orange-banner">
        <div className="main-text-cards">
          <motion.div className="main-titles" {...scrollRightAnimation}>
            <span>
              <h2>IT System Management</h2>
              <p>Time to Get Organized</p>
            </span>
            <div className="gradient-block black-gradient"></div>
            <p className="main-blurb">
              An <b>effective</b> systems management plan facilitates the
              delivery of IT as a service and allows an organization's employees
              to respond <b>quickly</b> to changing business requirements and
              system activity.
            </p>
          </motion.div>
          <motion.div className="main-illustrations" {...scrollLeftAnimation}>
            {computerSvg}
          </motion.div>
        </div>
      </div>
      <div className="curve-one">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="white-banner">
        <div className="main-text-cards">
          <motion.div className="main-illustrations" {...scrollRightAnimation}>
            {ticketSvg}
          </motion.div>
          <motion.div className="main-titles" {...scrollLeftAnimation}>
            <span>
              <h2>Ticket System</h2>
              <p>Manage Case Inflow</p>
            </span>
            <div className="gradient-block orange-gradient"></div>
            <p className="main-blurb">
              A ticketing system is a software program that the{" "}
              <b>IT support team</b> uses to create, manage, and maintain a list
              (or lists) of <b>internal problems</b>.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="curve-two">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="orange-banner">
        <div className="main-text-cards">
          <motion.div className="main-titles" {...scrollRightAnimation}>
            <span>
              <h2>Inventory</h2>
              <p>Data Management</p>
            </span>
            <div className="gradient-block black-gradient"></div>
            <p className="main-blurb">
              Inventory management helps <b>identify</b> which products are
              being maintained. It tracks tickets related to products to ensure
              <b>excellent</b> and <b>consistent</b> service.
            </p>
          </motion.div>
          <motion.div className="main-illustrations" {...scrollLeftAnimation}>
            {inventorySvg}
          </motion.div>
        </div>
      </div>
      <div className="curve-three">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="white-banner">
        <div className="main-text-cards">
          <motion.div className="main-illustrations" {...scrollRightAnimation}>
            {dashboardSvg}
          </motion.div>
          <motion.div className="main-titles" {...scrollLeftAnimation}>
            <span>
              <h2>Dashboard</h2>
              <p>View metrics and data</p>
            </span>
            <div className="gradient-block orange-gradient"></div>
            <p className="main-blurb">
              A dashboard is a data <b>visualization</b> tool that tracks,
              analyzes, and, displays <b>key metrics</b> and critical data
              points.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
