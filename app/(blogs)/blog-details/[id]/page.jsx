import Header1 from "@/components/headers/Header1";
import Newsletter from "@/components/blog/Newsletter";
import Footer2 from "@/components/footers/Footer2";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { getBlogById } from "@/lib/blogStore";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }) {
  const blog = await getBlogById(params.id);
  if (!blog) return {};
  return { title: blog.seoTitle || blog.title, description: blog.metaDescription || blog.desc || blog.excerpt, alternates: { canonical: `/blog-details/${blog.slug || blog.id}` } };
}
export default async function BlogDetailsPage1({ params }) {
  const id = params.id;
  const blogItem = await getBlogById(id);
  if (!blogItem) notFound();
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <BlogDetails1 blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
