import React from 'react';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
        <div><Link to="/" className="brand footer-brand">adasa<span>.</span></Link><p className="footer-copy">A journal for people who see the world differently.</p></div>
        <div className="footer-links"><Link to="/">Home</Link><Link to="/blog">Blog</Link><a href="mailto:hello@adasa.example">Contact</a></div>
        <small>© 2025 Adasa Journal. All rights reserved.</small>
      </div>
    </footer>
  );
}