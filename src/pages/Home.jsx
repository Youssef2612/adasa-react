import React from 'react';
import { Link } from "react-router-dom";
import blogs from "../data/blogs.json";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const featured = blogs[0];
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-kicker"><span></span> THE PHOTOGRAPHY JOURNAL</div>
          <div className="row align-items-end g-4">
            <div className="col-lg-8">
              <h1>See the world<br/><em>in a different light.</em></h1>
            </div>
            <div className="col-lg-4 hero-intro">
              <p>Stories, inspiration, and practical guides for curious photographers. Find your perspective and make every frame count.</p>
              <Link to="/blog" className="text-link">Discover the journal <i className="bi bi-arrow-up-right"></i></Link>
            </div>
          </div>
          <Link to={`/blog/${featured.id}`} className="hero-feature">
            <img src={featured.image} alt={featured.title}/>
            <div className="hero-feature-overlay">
              <span className="eyebrow">EDITOR'S PICK · {featured.category}</span>
              <h2>{featured.title}</h2>
              <span className="read-feature">Read the story <i className="bi bi-arrow-up-right"></i></span>
            </div>
          </Link>
        </div>
      </section>
      <section className="section-space container">
        <div className="section-heading">
          <div><span className="eyebrow dark-eyebrow">FROM THE JOURNAL</span><h2>Ideas worth <em>framing.</em></h2></div>
          <Link to="/blog" className="text-link">View all articles <i className="bi bi-arrow-up-right"></i></Link>
        </div>
        <div className="row g-4">
          {blogs.slice(1,4).map(blog => <div className="col-md-6 col-lg-4" key={blog.id}><BlogCard blog={blog}/></div>)}
        </div>
      </section>
      <section className="quote-band"><div className="container"><span className="eyebrow">A NOTE TO PHOTOGRAPHERS</span><p>“Photography is the story I fail to put into words.”</p><span className="quote-author">— DESTIN SPARKS</span></div></section>
    </>
  );
}