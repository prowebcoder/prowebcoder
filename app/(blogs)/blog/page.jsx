import Header1 from "@/components/headers/Header1";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import Blogs1 from "@/components/blog/Blogs1";
import { getPublicBlogs } from "@/lib/blogStore";
export const dynamic = "force-dynamic";
export const metadata = {
  title:
    "Blog 1 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default async function BlogPage1() {
  const blogs = await getPublicBlogs();
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <Blogs1 blogs={blogs} />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
