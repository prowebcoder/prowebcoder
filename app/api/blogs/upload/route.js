import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const acceptedTypes = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/gif", ".gif"],
]);

function isAuthorized(request) {
  const password = process.env.BLOG_ADMIN_PASSWORD;
  return Boolean(password) && request.headers.get("authorization") === `Bearer ${password}`;
}

export async function POST(request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const formData = await request.formData();
  const file = formData.get("image");
  if (!(file instanceof File) || !acceptedTypes.has(file.type)) {
    return NextResponse.json({ error: "Choose a JPG, PNG, WebP, or GIF image." }, { status: 400 });
  }
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Images must be 5 MB or smaller." }, { status: 400 });
  }

  const directory = path.join(process.cwd(), "public", "uploads", "blogs");
  await fs.mkdir(directory, { recursive: true });
  const fileName = `${randomUUID()}${acceptedTypes.get(file.type)}`;
  await fs.writeFile(path.join(directory, fileName), Buffer.from(await file.arrayBuffer()));
  return NextResponse.json({ url: `/uploads/blogs/${fileName}` }, { status: 201 });
}