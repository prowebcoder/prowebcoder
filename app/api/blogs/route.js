import { createBlog, deleteBlog, getManagedBlogs, updateBlog } from "@/lib/blogStore";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const requiredFields = ["title", "slug", "category", "excerpt", "content", "authorName"];

function isAuthorized(request) {
  const password = process.env.BLOG_ADMIN_PASSWORD;
  return Boolean(password) && request.headers.get("authorization") === `Bearer ${password}`;
}

function validateBlog(body) {
  if (!body || typeof body !== "object") return "Invalid request body.";
  const hasMissingField = requiredFields.some(
    (field) => typeof body[field] !== "string" || !body[field].trim()
  );
  if (hasMissingField) return "Title, slug, category, excerpt, content, and author are required.";
  if (body.title.trim().length > 160 || body.excerpt.trim().length > 350 || body.metaDescription?.trim().length > 160) {
    return "The title, excerpt, or meta description is too long.";
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.slug.trim().toLowerCase())) return "Use lowercase letters, numbers, and hyphens for the URL slug.";
  if (typeof body.image === "string" && body.image.trim() && !body.image.trim().startsWith("/")) {
    return "Image must be a path to an image in the public folder.";
  }
  return null;
}

export async function GET(request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await getManagedBlogs());
}

export async function POST(request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const validationError = validateBlog(body);
  if (validationError) return NextResponse.json({ error: validationError }, { status: 400 });
  return NextResponse.json(await createBlog(body), { status: 201 });
}

export async function PUT(request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const validationError = validateBlog(body);
  if (validationError) return NextResponse.json({ error: validationError }, { status: 400 });
  if (typeof body.id !== "string" || !body.id.startsWith("custom-")) {
    return NextResponse.json({ error: "A custom blog id is required." }, { status: 400 });
  }
  const blog = await updateBlog(body.id, body);
  if (!blog) return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  return NextResponse.json(blog);
}

export async function DELETE(request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  if (typeof body.id !== "string" && typeof body.id !== "number") return NextResponse.json({ error: "A blog id is required." }, { status: 400 });
  const deleted = await deleteBlog(body.id);
  if (!deleted) return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  return new NextResponse(null, { status: 204 });
}