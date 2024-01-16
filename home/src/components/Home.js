import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button>
        <Link to="/">Home</Link>
      </button><br></br><br></br>
      <button>
        <Link to="/Book">Book</Link>
      </button><br></br>
      <br></br>
      <button>
        <Link to="/Dashboard">Dashboard</Link>
      </button><br></br>
      <br></br>
      <button>
        <Link to="/AddName">AddName</Link>
      </button><br></br>
      <br></br>
      <button>
        <Link to="/AddBook">AddBook</Link>
      </button><br></br><br></br>

      <button>
        <Link to="/UserName">UserName</Link>
      </button>
    </div>
  );
};
