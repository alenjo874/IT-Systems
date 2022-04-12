import React from "react";
import computer from "../../style/images/computer.svg";
import ticket from "../../style/images/ticket.svg";
import inventory from "../../style/images/inventory.svg";
import dashboard from "../../style/images/dashboard.svg";

function MainPage() {
  return (
    <div className="main-page-container">
      <div className="orange-banner">
        <div className="main-text-cards">
          <div className="main-titles">
            <span>
              <h2>IT System management</h2>
              <p>Time to Get Organized</p>
            </span>
            <div className="gradient-block black-gradient"></div>
            <p className="main-blurb">
              An effective systems management plan facilitates the delivery of
              IT as a service and allows an organization's employees to respond
              quickly to changing business requirements and system activity.
            </p>
          </div>
          <div className="main-illustrations">
            <img src={computer} />
          </div>
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
          <div className="main-illustrations">
            <img src={ticket} />
          </div>
          <div className="main-titles">
            <span>
              <h2>Ticket</h2>
              <p>Time to Get Organized</p>
            </span>
            <div className="gradient-block orange-gradient"></div>
            <p className="main-blurb">
              An effective systems management plan facilitates the delivery of
              IT as a service and allows an organization's employees to respond
              quickly to changing business requirements and system activity.
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
              <p>Time to Get Organized</p>
            </span>
            <div className="gradient-block black-gradient"></div>
            <p className="main-blurb">
              An effective systems management plan facilitates the delivery of
              IT as a service and allows an organization's employees to respond
              quickly to changing business requirements and system activity.
            </p>
          </div>
          <div className="main-illustrations">
            <img src={dashboard} />
          </div>
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
          <div className="main-illustrations">
            <img src={inventory} />
          </div>
          <div className="main-titles">
            <span>
              <h2>Dashboard</h2>
              <p>Time to Get Organized</p>
            </span>
            <div className="gradient-block orange-gradient"></div>
            <p className="main-blurb">
              An effective systems management plan facilitates the delivery of
              IT as a service and allows an organization's employees to respond
              quickly to changing business requirements and system activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
