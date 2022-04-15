import React from "react";
import {
  computerSvg,
  ticketSvg,
  inventorySvg,
  dashboardSvg,
} from "./mainSvgSource";

function MainPage() {
  return (
    <div className="main-page-container">
      <div className="orange-banner">
        <div className="main-text-cards">
          <div className="main-titles">
            <span>
              <h2>IT System Management</h2>
              <p>Time to Get Organized</p>
            </span>
            <div className="gradient-block black-gradient"></div>
            <p className="main-blurb">
              An effective systems management plan facilitates the delivery of
              IT as a service and allows an organization's employees to respond
              quickly to changing business requirements and system activity.
            </p>
          </div>
          <div className="main-illustrations">{computerSvg}</div>
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
          <div className="main-illustrations">{ticketSvg}</div>
          <div className="main-titles">
            <span>
              <h2>Ticket System</h2>
              <p>Manage Case Inflow</p>
            </span>
            <div className="gradient-block orange-gradient"></div>
            <p className="main-blurb">
              A ticketing system is a software program that the IT support
              team uses to create, manage, and maintain a list (or lists) of
              internal problems.
            </p>
          </div>
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
          <div className="main-titles">
            <span>
              <h2>Inventory</h2>
              <p>Data Management</p>
            </span>
            <div className="gradient-block black-gradient"></div>
            <p className="main-blurb">
              Inventory management helps identify which products are being maintained. It tracks tickets
              related to products to ensure excellent and consistent service.
            </p>
          </div>
          <div className="main-illustrations">{inventorySvg}</div>
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
          <div className="main-illustrations">{dashboardSvg}</div>
          <div className="main-titles">
            <span>
              <h2>Dashboard</h2>
              <p>View metrics and data</p>
            </span>
            <div className="gradient-block orange-gradient"></div>
            <p className="main-blurb">
              A dashboard is a data visualization tool that tracks, analyzes,
              and, displays key metrics and critical data points.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
