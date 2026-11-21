import React from 'react';
import { Link, useParams } from "react-router-dom";
import blogs from "../data/blogs.json";
import NotFound from "./NotFound";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(item => String(item.id) === String(id));
  if (!blog) return <NotFound />;
  return (
    <article className="details-page">
      <div className="container details-container">
        <Link to="/blog" className="back-link"><i className="bi bi-arrow-left"></i> Back to journal</Link>
        <div className="details-heading">
          <span className="eyebrow dark-eyebrow">{blog.category} · {blog.readTime}</span>
          <h1>{blog.title}</h1>
          <p className="details-excerpt">{blog.excerpt}</p>
          <div className="details-author"><span>Words by <strong>{blog.author}</strong></span><span>{blog.date}</span></div>
        </div>
        <img className="details-image" src={blog.image} alt={blog.title}/>
        <div className="article-content">
          <p className="drop-cap">{blog.content}</p>
          <h2>Look closer. Tell a story.</h2>
          <p>Take your time with every frame. Pay attention to the details that first caught your eye, experiment with different points of view, and let your own visual language develop through practice.</p>
          <blockquote>Every photograph is an invitation to pause, notice, and remember.</blockquote>
          <p>Keep exploring, keep learning, and most importantly, keep making photographs. The best way to improve is to stay curious and take your camera with you.</p>
        </div>
        <div className="details-end"><span>Enjoyed this story?</span><Link to="/blog" className="text-link">Explore more articles <i className="bi bi-arrow-up-right"></i></Link></div>
      </div>
    </article>
  );
}