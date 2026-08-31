"use client";

import { useState } from "react";
import BlogEditor from "./BlogEditor";

const emptyBlog = {
  title: "",
  category: "",
  excerpt: "",
  content: "",
  authorName: "",
  image: "/assets/images/blog/img-01.jpg",
};

function LegacyBlogAdminPage() {
  const [password, setPassword] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(emptyBlog);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (method, body) => {
    const response = await fetch("/api/blogs", {
      method,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${password}` },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Unable to save the blog.");
    return data;
  };

  const loadBlogs = async () => {
    setLoading(true);
    try {
      setBlogs(await request("GET"));
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const saveBlog = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const savedBlog = await request(editingId ? "PUT" : "POST", { ...blog, id: editingId });
      setBlogs((current) => editingId ? current.map((item) => item.id === savedBlog.id ? savedBlog : item) : [savedBlog, ...current]);
      setBlog(emptyBlog);
      setEditingId(null);
      setMessage("Blog published.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const editBlog = (item) => {
    setEditingId(item.id);
    setBlog({ title: item.title, category: item.category, excerpt: item.desc, content: item.content, authorName: item.authorName, image: item.imgSrc });
    setMessage("");
  };

  return (
    <main className="container max-w-lg py-9">
      <div className="vstack gap-4">
        <div>
          <h1 className="h2 m-0">Blog editor</h1>
          <p className="opacity-70 mt-1">Create and update posts published on the public blog.</p>
        </div>
        <div className="hstack gap-1 items-end flex-wrap">
          <label className="vstack gap-narrow flex-1">Editor password<input className="form-control" type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
          <button className="btn btn-primary" type="button" onClick={loadBlogs} disabled={!password || loading}>Load posts</button>
        </div>
        <form className="vstack gap-2" onSubmit={saveBlog}>
          <label className="vstack gap-narrow">Title<input className="form-control" required maxLength="160" value={blog.title} onChange={(event) => setBlog({ ...blog, title: event.target.value })} /></label>
          <div className="row child-cols-12 sm:child-cols-6 g-2"><label className="vstack gap-narrow">Category<input className="form-control" required value={blog.category} onChange={(event) => setBlog({ ...blog, category: event.target.value })} /></label><label className="vstack gap-narrow">Author<input className="form-control" required value={blog.authorName} onChange={(event) => setBlog({ ...blog, authorName: event.target.value })} /></label></div>
          <label className="vstack gap-narrow">Image path<input className="form-control" value={blog.image} onChange={(event) => setBlog({ ...blog, image: event.target.value })} /></label>
          <label className="vstack gap-narrow">Excerpt<textarea className="form-control" required maxLength="350" rows="3" value={blog.excerpt} onChange={(event) => setBlog({ ...blog, excerpt: event.target.value })} /></label>
          <label className="vstack gap-narrow">Content<textarea className="form-control" required rows="12" value={blog.content} onChange={(event) => setBlog({ ...blog, content: event.target.value })} /></label>
          <div className="hstack gap-1"><button className="btn btn-primary" disabled={loading}>{editingId ? "Update post" : "Publish post"}</button>{editingId && <button className="btn btn-secondary" type="button" onClick={() => { setEditingId(null); setBlog(emptyBlog); }}>Cancel</button>}</div>
        </form>
        {message && <p className="m-0" role="status">{message}</p>}
        {blogs.length > 0 && <div className="vstack gap-1"><h2 className="h5 m-0">Published custom posts</h2>{blogs.map((item) => <button key={item.id} className="btn btn-sm border text-start" type="button" onClick={() => editBlog(item)}>{item.title}</button>)}</div>}
      </div>
    </main>
  );
}

export default function BlogAdminPage() {
  return <BlogEditor />;
}