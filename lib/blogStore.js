import "server-only";
import { promises as fs } from "fs";
import path from "path";
import sanitizeHtml from "sanitize-html";
import { allBlogs, blogsPosts4 } from "@/data/blogs";

const customBlogsPath = path.join(process.cwd(), "data", "custom-blogs.json");
const hiddenBlogsPath = path.join(process.cwd(), "data", "hidden-blogs.json");
const defaultImage = "/assets/images/blog/img-01.jpg";
const defaultAuthorImage = "/assets/images/avatars/02.png";
const richTextOptions = {
  allowedTags: ["p", "br", "strong", "em", "h2", "h3", "h4", "ul", "ol", "li", "a", "blockquote", "img", "pre", "code", "table", "thead", "tbody", "tr", "th", "td"],
  allowedAttributes: { a: ["href", "target", "rel"], img: ["src", "alt", "width", "height"] },
  allowedSchemes: ["http", "https", "mailto", "data"],
};

function sanitizeContent(content) {
  return sanitizeHtml(content || "", richTextOptions);
}

async function readCustomBlogs() {
  try {
    const contents = await fs.readFile(customBlogsPath, "utf8");
    const blogs = JSON.parse(contents);
    return Array.isArray(blogs)
      ? blogs.map((blog) => ({ ...blog, content: sanitizeContent(blog.content) }))
      : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function writeCustomBlogs(blogs) {
  await fs.writeFile(customBlogsPath, `${JSON.stringify(blogs, null, 2)}\n`, "utf8");
}

async function readHiddenBlogIds() {
  try {
    const contents = await fs.readFile(hiddenBlogsPath, "utf8");
    const ids = JSON.parse(contents);
    return Array.isArray(ids) ? ids.map(String) : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function writeHiddenBlogIds(ids) {
  await fs.writeFile(hiddenBlogsPath, `${JSON.stringify(ids, null, 2)}\n`, "utf8");
}

export function normalizeBlog(input, id) {
  const title = input.title.trim();
  const slug = input.slug.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return {
    id,
    title,
    slug,
    category: input.category.trim(),
    desc: input.excerpt.trim(),
    content: sanitizeContent(input.content.trim()),
    seoTitle: input.seoTitle.trim() || title,
    metaDescription: input.metaDescription.trim() || input.excerpt.trim(),
    imgSrc: input.image?.trim() || defaultImage,
    imgAlt: title,
    imgCaption: title,
    authorName: input.authorName.trim(),
    authorImg: defaultAuthorImage,
    authorAlt: input.authorName.trim(),
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    createdAt: new Date().toISOString(),
  };
}

export async function getCustomBlogs() {
  return readCustomBlogs();
}

export async function getPublicBlogs() {
  const [customBlogs, hiddenBlogIds] = await Promise.all([readCustomBlogs(), readHiddenBlogIds()]);
  return [...customBlogs, ...blogsPosts4.filter((blog) => !hiddenBlogIds.includes(String(blog.id)))];
}

export async function getBlogById(id) {
  const [customBlogs, hiddenBlogIds] = await Promise.all([readCustomBlogs(), readHiddenBlogIds()]);
  const customBlog = customBlogs.find((blog) => String(blog.id) === String(id) || blog.slug === id);
  if (customBlog) return customBlog;
  const templateBlog = allBlogs.find((blog) => String(blog.id) === String(id));
  return templateBlog && !hiddenBlogIds.includes(String(templateBlog.id)) ? templateBlog : undefined;
}

export async function getManagedBlogs() {
  const [customBlogs, hiddenBlogIds] = await Promise.all([readCustomBlogs(), readHiddenBlogIds()]);
  const templateBlogs = blogsPosts4
    .filter((blog) => !hiddenBlogIds.includes(String(blog.id)))
    .map((blog) => ({ ...blog, isTemplate: true }));
  return [...customBlogs, ...templateBlogs];
}

export async function createBlog(input) {
  const customBlogs = await readCustomBlogs();
  const id = `custom-${Date.now()}`;
  const blog = normalizeBlog(input, id);
  await writeCustomBlogs([blog, ...customBlogs]);
  return blog;
}

export async function updateBlog(id, input) {
  const customBlogs = await readCustomBlogs();
  const index = customBlogs.findIndex((blog) => blog.id === id);
  if (index === -1) return null;

  const existing = customBlogs[index];
  const blog = { ...normalizeBlog(input, id), createdAt: existing.createdAt };
  customBlogs[index] = blog;
  await writeCustomBlogs(customBlogs);
  return blog;
}

export async function deleteBlog(id) {
  const customBlogs = await readCustomBlogs();
  const remainingBlogs = customBlogs.filter((blog) => blog.id !== id);
  if (remainingBlogs.length !== customBlogs.length) {
    await writeCustomBlogs(remainingBlogs);
    return true;
  }
  if (!blogsPosts4.some((blog) => String(blog.id) === String(id))) return false;
  const hiddenBlogIds = await readHiddenBlogIds();
  if (!hiddenBlogIds.includes(String(id))) await writeHiddenBlogIds([...hiddenBlogIds, String(id)]);
  return true;
}