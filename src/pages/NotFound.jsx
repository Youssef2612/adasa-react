import React from 'react';
import { Link } from "react-router-dom";
export default function NotFound() {
  return <section className="not-found"><div className="container"><span className="eyebrow dark-eyebrow">ERROR 404</span><h1>Lost in the<br/><em>wrong frame.</em></h1><p>The page you're looking for doesn't exist or may have moved.</p><Link to="/" className="dark-button">Back to home <i className="bi bi-arrow-up-right"></i></Link></div></section>;
}