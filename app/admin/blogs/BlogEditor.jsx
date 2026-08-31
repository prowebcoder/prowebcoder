"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const emptyBlog = { title: "", slug: "", category: "", excerpt: "", content: "", authorName: "", image: "/assets/images/blog/img-01.jpg", seoTitle: "", metaDescription: "" };
const makeSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function BlogEditor() {
  const [password, setPassword] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(emptyBlog);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [sourceMode, setSourceMode] = useState(false);
  const [htmlSource, setHtmlSource] = useState("");
  const contentRef = useRef(null);

  useEffect(() => { if (contentRef.current) contentRef.current.innerHTML = blog.content; setHtmlSource(blog.content); }, [editingId]);
  const change = (field, value) => setBlog((current) => ({ ...current, [field]: value }));
  const request = async (method, body) => {
    const response = await fetch("/api/blogs", { method, headers: { "Content-Type": "application/json", Authorization: `Bearer ${password}` }, body: body ? JSON.stringify(body) : undefined });
    const data = response.status === 204 ? null : await response.json();
    if (!response.ok) throw new Error(data?.error || "Unable to save the post.");
    return data;
  };
  const loadBlogs = async () => { setLoading(true); try { setBlogs(await request("GET")); setMessage(""); } catch (error) { setMessage(error.message); } finally { setLoading(false); } };
  const saveBlog = async (event) => {
    event.preventDefault();
    const content = sourceMode ? htmlSource.trim() : contentRef.current?.innerHTML.trim() || "";
    setLoading(true);
    try {
      const saved = await request(editingId ? "PUT" : "POST", { ...blog, content, id: editingId });
      setBlogs((current) => editingId ? current.map((item) => item.id === saved.id ? saved : item) : [saved, ...current]);
      setBlog(emptyBlog); setEditingId(null); setHtmlSource(""); if (contentRef.current) contentRef.current.innerHTML = ""; setMessage("Post published successfully.");
    } catch (error) { setMessage(error.message); } finally { setLoading(false); }
  };
  const editBlog = (item) => { if (item.isTemplate) return; setEditingId(item.id); setBlog({ title: item.title, slug: item.slug || makeSlug(item.title), category: item.category, excerpt: item.desc, content: item.content, authorName: item.authorName, image: item.imgSrc, seoTitle: item.seoTitle || item.title, metaDescription: item.metaDescription || item.desc }); setMessage(""); };
  const deleteBlog = async (id = editingId) => {
    if (!id || !window.confirm("Delete this post permanently?")) return;
    setLoading(true);
    try { await request("DELETE", { id }); setBlogs((current) => current.filter((item) => item.id !== id)); if (editingId === id) { setBlog(emptyBlog); setEditingId(null); setHtmlSource(""); if (contentRef.current) contentRef.current.innerHTML = ""; } setMessage("Post deleted."); } catch (error) { setMessage(error.message); } finally { setLoading(false); }
  };
  const format = (command, value) => { contentRef.current?.focus(); document.execCommand(command, false, value); };
  const toggleSourceMode = () => {
    if (sourceMode && contentRef.current) contentRef.current.innerHTML = htmlSource;
    if (!sourceMode) setHtmlSource(contentRef.current?.innerHTML || "");
    setSourceMode((current) => !current);
  };
  const uploadImage = async (event, featured = false) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch("/api/blogs/upload", { method: "POST", headers: { Authorization: `Bearer ${password}` }, body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Image upload failed.");
      if (featured) change("image", data.url);
      else if (sourceMode) setHtmlSource((current) => `${current}\n<p><img src="${data.url}" alt="" /></p>`);
      else format("insertImage", data.url);
      setMessage("Image uploaded.");
    } catch (error) { setMessage(error.message); } finally { setUploading(false); event.target.value = ""; }
  };
  const updateTitle = (value) => setBlog((current) => ({ ...current, title: value, slug: current.slug || makeSlug(value), seoTitle: current.seoTitle || value }));

  return <main className={styles.shell}>
    <header className={styles.hero}><div><p className={styles.eyebrow}>Prowebcoder publishing</p><h1>Write with intent.</h1><p>Build search-ready articles without leaving your site.</p></div><a className="btn btn-primary" href="/blog" target="_blank">View public blog</a></header>
    <div className={styles.layout}>
      <form className={`${styles.panel} ${styles.editor}`} onSubmit={saveBlog}>
        <div className={styles.grid}><label className={styles.field}>Editor password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label><div className={styles.field}><span>Custom posts</span><button className="btn btn-secondary" type="button" onClick={loadBlogs} disabled={!password || loading}>Load saved posts</button></div></div>
        <h2 className={styles.sectionTitle}>{editingId ? "Edit article" : "New article"}</h2>
        <label className={styles.field}>Article title<input required maxLength="160" value={blog.title} onChange={(event) => updateTitle(event.target.value)} /></label>
        <div className={styles.grid} style={{ marginTop: 16 }}><label className={styles.field}>URL slug<input required value={blog.slug} onChange={(event) => change("slug", makeSlug(event.target.value))} /></label><label className={styles.field}>Category<input required value={blog.category} onChange={(event) => change("category", event.target.value)} /></label></div>
        <div className={styles.grid} style={{ marginTop: 16 }}><label className={styles.field}>Author<input required value={blog.authorName} onChange={(event) => change("authorName", event.target.value)} /></label><label className={styles.field}>Featured image path<input value={blog.image} onChange={(event) => change("image", event.target.value)} /></label></div>
        <div className={styles.mediaRow}><label className={`btn btn-secondary ${!password || uploading ? styles.disabled : ""}`}>Upload featured image<input className={styles.fileInput} type="file" accept="image/jpeg,image/png,image/webp,image/gif" disabled={!password || uploading} onChange={(event) => uploadImage(event, true)} /></label>{blog.image && <img className={styles.featuredPreview} src={blog.image} alt="Featured preview" />}</div>
        <label className={styles.field} style={{ marginTop: 16 }}>Article summary<textarea required rows="3" maxLength="350" value={blog.excerpt} onChange={(event) => change("excerpt", event.target.value)} /></label>
        <div className={styles.bodyHeading}><h2 className={styles.sectionTitle}>Article body</h2><button className="btn btn-sm btn-secondary" type="button" onClick={toggleSourceMode}>{sourceMode ? "Visual editor" : "HTML source"}</button></div>
        <div className={styles.toolbar}><button className={styles.tool} type="button" title="Bold" disabled={sourceMode} onClick={() => format("bold")}>B</button><button className={styles.tool} type="button" title="Italic" disabled={sourceMode} onClick={() => format("italic")}>I</button><button className={styles.tool} type="button" title="Heading" disabled={sourceMode} onClick={() => format("formatBlock", "h2")}>H2</button><button className={styles.tool} type="button" title="Bullet list" disabled={sourceMode} onClick={() => format("insertUnorderedList")}>List</button><button className={styles.tool} type="button" title="Numbered list" disabled={sourceMode} onClick={() => format("insertOrderedList")}>1.</button><button className={styles.tool} type="button" title="Add link" disabled={sourceMode} onClick={() => { const url = window.prompt("Link URL"); if (url) format("createLink", url); }}>Link</button><label className={`${styles.uploadInline} ${!password || uploading ? styles.disabled : ""}`}>Add image<input className={styles.fileInput} type="file" accept="image/jpeg,image/png,image/webp,image/gif" disabled={!password || uploading} onChange={uploadImage} /></label></div>
        {sourceMode ? <textarea className={styles.htmlSource} value={htmlSource} onChange={(event) => setHtmlSource(event.target.value)} spellCheck="false" aria-label="Article HTML source" /> : <div ref={contentRef} className={styles.richText} contentEditable suppressContentEditableWarning aria-label="Article body" />}
        <h2 className={styles.sectionTitle}>Search appearance</h2><div className={styles.seo}><label className={styles.field}>SEO title<input maxLength="160" value={blog.seoTitle} onChange={(event) => change("seoTitle", event.target.value)} /></label><label className={styles.field} style={{ marginTop: 14 }}>Meta description<textarea rows="3" maxLength="160" value={blog.metaDescription} onChange={(event) => change("metaDescription", event.target.value)} /></label></div>
        <div className={styles.actions}><div>{editingId && <button className={`btn ${styles.danger}`} type="button" onClick={() => deleteBlog()} disabled={loading}>Delete post</button>}</div><div className="hstack gap-1"><button className="btn btn-secondary" type="button" onClick={() => { setBlog(emptyBlog); setEditingId(null); setHtmlSource(""); if (contentRef.current) contentRef.current.innerHTML = ""; }}>Clear</button><button className="btn btn-primary" disabled={loading || !password || uploading}>{editingId ? "Update post" : "Publish post"}</button></div></div>
        {message && <p className={styles.message} role="status">{message}</p>}
      </form>
      <aside className={`${styles.panel} ${styles.side}`}><p className={styles.eyebrow}>Library</p><h2 className="h5 m-0">Published posts</h2>{blogs.length === 0 && <p className="fs-7 opacity-70 mt-2">Load posts to manage published content.</p>}{blogs.map((item) => <div className={styles.post} key={item.id}>{item.isTemplate ? <a className={styles.postEdit} href={`/blog-details/${item.id}`} target="_blank"><span className={styles.postTitle}>{item.title}</span><span className={styles.postMeta}>Template post | {item.date}</span></a> : <button className={styles.postEdit} type="button" onClick={() => editBlog(item)}><span className={styles.postTitle}>{item.title}</span><span className={styles.postMeta}>{item.category} | {item.date}</span></button>}<button className={styles.postDelete} type="button" title={`Delete ${item.title}`} onClick={() => deleteBlog(item.id)} disabled={loading}>Delete</button></div>)}</aside>
    </div>
  </main>;
}