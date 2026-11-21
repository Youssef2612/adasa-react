import React from 'react';
import { useMemo, useState } from "react";
import blogs from "../data/blogs.json";
import BlogCard from "../components/BlogCard";

const PAGE_SIZE = 6;

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const categories = ["All", ...new Set(blogs.map(blog => blog.category))];
  const filteredBlogs = useMemo(() => blogs.filter(blog => {
    const text = `${blog.title} ${blog.excerpt} ${blog.author} ${blog.category}`.toLowerCase();
    return text.includes(search.toLowerCase()) && (category === "All" || blog.category === category);
  }), [search, category]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleBlogs = filteredBlogs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function updateSearch(value) { setSearch(value); setPage(1); }
  function updateCategory(value) { setCategory(value); setPage(1); }

  return (
    <section className="container blog-page section-space">
      <div className="page-heading">
        <span className="eyebrow dark-eyebrow">THE ADASA JOURNAL</span>
        <h1>Stories behind<br/><em>the lens.</em></h1>
        <p>Explore techniques, inspiration and perspectives from the world of photography.</p>
      </div>
      <div className="blog-toolbar">
        <div className="search-box"><i className="bi bi-search"></i><input value={search} onChange={e => updateSearch(e.target.value)} placeholder="Search articles..." aria-label="Search articles"/>{search && <button onClick={() => updateSearch("")} aria-label="Clear search"><i className="bi bi-x-lg"></i></button>}</div>
        <div className="toolbar-right">
          <select className="category-select" value={category} onChange={e => updateCategory(e.target.value)} aria-label="Filter by category">
            {categories.map(item => <option key={item} value={item}>{item === "All" ? "All categories" : item}</option>)}
          </select>
          <div className="view-switch" aria-label="Choose view">
            <button className={view === "grid" ? "selected" : ""} onClick={() => setView("grid")} aria-label="Grid view"><i className="bi bi-grid"></i></button>
            <button className={view === "list" ? "selected" : ""} onClick={() => setView("list")} aria-label="List view"><i className="bi bi-list-ul"></i></button>
          </div>
        </div>
      </div>
      <div className="results-line"><span>{filteredBlogs.length} ARTICLES</span><span>PAGE {currentPage} OF {totalPages}</span></div>
      {visibleBlogs.length ? (
        <div className={view === "grid" ? "row g-4 blog-grid" : "blog-list"}>
          {visibleBlogs.map(blog => <div className={view === "grid" ? "col-md-6 col-lg-4" : ""} key={blog.id}><BlogCard blog={blog} list={view === "list"}/></div>)}
        </div>
      ) : <div className="empty-state"><i className="bi bi-camera"></i><h3>No stories found</h3><p>Try another search term or choose a different category.</p><button className="dark-button" onClick={() => {updateSearch(""); updateCategory("All");}}>Clear filters</button></div>}
      {filteredBlogs.length > PAGE_SIZE && <nav className="pagination-wrap" aria-label="Blog pagination">
        <button className="page-arrow" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}><i className="bi bi-arrow-left"></i> Previous</button>
        <div className="page-numbers">{Array.from({length: totalPages}, (_, i) => i + 1).map(number => <button key={number} className={currentPage === number ? "current" : ""} onClick={() => setPage(number)}>{number}</button>)}</div>
        <button className="page-arrow" disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>Next <i className="bi bi-arrow-right"></i></button>
      </nav>}
    </section>
  );
}