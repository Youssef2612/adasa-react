import React from 'react';
import { Link } from "react-router-dom";

export default function BlogCard({ blog, list = false }) {
  return (
    <article className={`blog-card ${list ? "blog-card-list" : ""}`}>
      <Link to={`/blog/${blog.id}`} className="card-image-wrap">
        <img src={blog.image} alt={blog.title} className="card-image" />
      </Link>
      <div className="card-body-custom">
        <div className="card-meta"><span>{blog.category}</span><span>{blog.readTime}</span></div>
        <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
        <p>{blog.excerpt}</p>
        <div className="card-bottom"><span>By {blog.author}</span><span>{blog.date}</span></div>
      </div>
    </article>
  );
}