import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Link
          className="btn btn-primary"
          to="/home/login"
        >
          Login
        </Link>|
        <Link
          className="btn btn-primary"
          to="/home/signup"
        >
          SignUp
        </Link>
      </div>
      <h1>For Better Experience Login</h1>
    </div>
  );
};

export default Home;
