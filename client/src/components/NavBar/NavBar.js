import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-elem">Main</Link>
      <Link to="/ticket" className="nav-elem">Ticket</Link>
      <Link to="/inventory" className="nav-elem">Inventory</Link>
      <Link to="/dashboard" className="nav-elem">Dashboard</Link>
    </div>
  );
}

export default NavBar;
