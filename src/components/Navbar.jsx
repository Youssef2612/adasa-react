import React from 'react';
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-nav">
      <div className="container">
        <Link className="navbar-brand brand" to="/">adasa<span>.</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
            <NavLink end to="/" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>Home</NavLink>
            <NavLink to="/blog" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>Blog</NavLink>
            <a className="nav-link" href="#footer">About</a>
            <Link to="/blog" className="nav-cta">Explore articles <i className="bi bi-arrow-up-right"></i></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}