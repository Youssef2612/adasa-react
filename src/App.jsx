import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}