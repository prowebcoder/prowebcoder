import React from "react";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Denis Slavska",
    role: "CTO, Allitic",
    company: "New York City, New York",
    logo: "/assets/images/brands/shopify.svg",
    image: "/assets/images/avatars/r1.webp",
    review: "They tailor their solutions to our specific needs and goals.",
  },
  {
    id: 2,
    name: "Jahan Melad",
    role: "Project Manager, Buildwave",
    company: "New York City, New York",
    logo: "/assets/images/brands/shopify.svg",
    image: "/assets/images/avatars/r2.webp",
    review:
      "They organized their work and internal management was outstanding.",
  },
  {
    id: 3,
    name: "Jim Halpert",
    role: "Lead Engineering, InHive Space",
    company: "New York City, New York",
    logo: "/assets/images/brands/shopify.svg",
    image: "/assets/images/avatars/r3.webp",
    review: "Working with them was a great experience.",
  },
//   {
//     id: 4,
//     name: "Jim Halpert",
//     role: "Lead Engineering, InHive Space",
//     company: "New York City, New York",
//     logo: "/assets/images/brands/shopify.svg",
//     image: "/assets/images/avatars/r3.webp",
//     review: "Working with them was a great experience.",
//   },
//   {
//     id: 5,
//     name: "Jim Halpert",
//     role: "Lead Engineering, InHive Space",
//     company: "New York City, New York",
//     logo: "/assets/images/brands/shopify.svg",
//     image: "/assets/images/avatars/r3.webp",
//     review: "Working with them was a great experience.",
//   },
//   {
//     id: 6,
//     name: "Jim Halpert",
//     role: "Lead Engineering, InHive Space",
//     company: "New York City, New York",
//     logo: "/assets/images/brands/shopify.svg",
//     image: "/assets/images/avatars/r3.webp",
//     review: "Working with them was a great experience.",
//   },
  // Add up to 20 reviews...
];

export default function Reviews() {
  return (
    <div id="reviews" className="reviews section panel overflow-hidden">
      <div className="section-outer panel  xl:pb-5 pb-6">
        <div className="container xl:max-w-7xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-10">
              {/* Heading */}
              <div className="heading vstack items-center text-center gap-3">
                <span className="fw-bold text-primary dark:text-secondary">
                  OUR REVIEWS
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  What Our <span className="text-primary">Clients</span> Say
                </h2>
              </div>

              {/* Reviews grid */}
              <div className="row child-cols col-match items-center justify-center   lg:gy-8 gap-2 lg:gap-2   mt-6">
                {reviews.map((r) => (
                  <div
                    key={r.id}
                    className="panel bg-white dark:bg-dark-2 rounded-3  border p-6 flex flex-col h-full"
                  >
                    {/* Top row: avatar + logo */}
                    <div className="hstack flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={r.image}
                          alt={r.name}
                          width={44}
                          height={44}
                          className="rounded-circle"
                        />
                     
                      </div>
                      {r.logo && (
                        <Image
                          src={r.logo}
                          alt={r.role}
                          width={80}
                          height={30}
                          className="object-contain "
                        />
                      )}
                    </div>

                    {/* Review */}
                    <p className="fs-5 text-dark dark:text-white text-opacity-80 italic leading-relaxed flex-1">
                      <span className="text-primary text-2xl me-1">“</span>
                      {r.review}
                    </p>

                    {/* Company */}
                       <div className="vstack mt-4">
                          <span className="fw-bold text-sm">{r.name}</span>
                          <span className="fs-7 text-gray-500">
                            {r.role}
                          </span>
                            <span className="fs-8 text-gray-400 mt-4">
                      {r.company}
                    </span>
                        </div>
                  
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="vstack items-center mt-6">
                <Link
                  href="/reviews"
                  className="btn btn-md btn-primary rounded-default"
                >
                  View All Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
