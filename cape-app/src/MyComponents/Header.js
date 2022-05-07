import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
            width="30"
            height="24"
          />
        </Link>
        <Link className="navbar-brand p-2 fs-4" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item p-2">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/contest">
                Contests
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/login">
                <button className="btn btn-outline-danger">Login</button>
              </Link>
            </li>
            <li className="nav-item p-2">
            <Link to="/register">
              <button className="btn btn-outline-success" to="/register">
                Register
              </button>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
