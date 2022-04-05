import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Link to="/login">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default MainPage;
