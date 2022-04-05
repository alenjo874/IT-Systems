import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <Link to="/">Main</Link>
      <Link to="/ticket">Ticket</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default NavBar;
