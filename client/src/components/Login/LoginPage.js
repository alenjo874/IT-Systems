import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-form">
        <Link to="/employee">
          <button>Employee Login</button>
        </Link>
        <Link to="/">
          <button>Admin Login</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
