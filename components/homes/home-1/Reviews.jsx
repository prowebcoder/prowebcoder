"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // 👈 add this
import "swiper/css"; // ← IMPORTANT

const reviews = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Founder, Elvardi",
    company: "London, UK",
    logo: "/assets/images/brands/shopify_main.svg",
    image: "/assets/images/avatars/r1.webp",
    review:
      "Rahul built our Shopify store Elvardi from scratch, customizing the theme beautifully and integrating upsell features using his PWC: Fav Tab & Upsell app. Our conversions increased within weeks.",
  },
  {
    id: 2,
    name: "James Miller",
    role: "CEO, PetPurifair",
    company: "Toronto, Canada",
    logo: "/assets/images/brands/shopify_main.svg",
    image: "/assets/images/avatars/r2.webp",
    review:
      "The Shopify app Rahul created for our business was game-changing. He tailored it to our exact needs, and the ongoing support has been fantastic.",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Marketing Manager, Dermaspa",
    company: "Manchester, UK",
    logo: "/assets/images/brands/shopify_main.svg",
    image: "/assets/images/avatars/r3.webp",
    review:
      "Our Shopify theme redesign was smooth and professional. Rahul optimized speed, improved UX, and integrated custom sections that fit perfectly with our branding.",
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "CTO, Studio Deve",
    company: "Paris, France",
    logo: "/assets/images/brands/sp.svg",
    image: "/assets/images/avatars/r1.webp",
    review:
      "We needed a custom Shopify app for customer wishlists, and Rahul delivered exactly what we envisioned. The PWC: Customer Pages & Wishlist app saved us months of development.",
  },
  {
    id: 5,
    name: "Hannah Smith",
    role: "Co-founder, Soleplus",
    company: "Stockholm, Sweden",
    logo: "/assets/images/brands/shopify_main.svg",
    image: "/assets/images/avatars/r5.webp",
    review:
      "Rahul migrated our store to Shopify and customized it for international sales. His attention to responsive design and speed optimization was excellent.",
  },
  {
    id: 6,
    name: "Chris Brown",
    role: "Manager, Farmhouse Fresh",
    company: "Texas, USA",
    logo: "/assets/images/brands/sp.svg",
    image: "/assets/images/avatars/r6.webp",
    review:
      "Our Shopify Plus build was handled seamlessly. Rahul added custom landing pages using his Sections & Landing Pages app — it saved us thousands in design costs.",
  },
  {
    id: 7,
    name: "Anna Lopez",
    role: "Blogger, Healthy Vices",
    company: "New York, USA",
    logo: "/assets/images/brands/wordpress.svg",
    image: "/assets/images/avatars/r7.webp",
    review:
      "Rahul transformed my WordPress blog with a modern design and faster load speed. He also helped me integrate e-commerce features without slowing the site.",
  },
  {
    id: 8,
    name: "David Green",
    role: "CEO, Texture Agency",
    company: "San Francisco, USA",
    logo: "/assets/images/brands/wordpress.svg",
    image: "/assets/images/avatars/r8.webp",
    review:
      "Our WordPress agency site was fully rebuilt by Rahul. The result was a sleek, high-performing site that boosted our credibility and SEO rankings.",
  },
  {
    id: 9,
    name: "Laura Mitchell",
    role: "Artist, LisaSasevich.com",
    company: "Los Angeles, USA",
    logo: "/assets/images/brands/wordpress.svg",
    image: "/assets/images/avatars/r9.webp",
    review:
      "Working with Rahul on my WordPress membership site was fantastic. He handled integrations, payment flows, and made the whole platform reliable.",
  },
  {
    id: 10,
    name: "Kevin Adams",
    role: "Owner, Pulse SS",
    company: "Berlin, Germany",
    logo: "/assets/images/brands/squarespace.svg",
    image: "/assets/images/avatars/r10.webp",
    review:
      "Rahul revamped our Squarespace portfolio, making it visually stunning and fully mobile-optimized. His eye for design really shines on this platform.",
  },
  {
    id: 11,
    name: "Sarah Lee",
    role: "Founder, Diamdis",
    company: "Athens, Greece",
    logo: "/assets/images/brands/squarespace.svg",
    image: "/assets/images/avatars/r11.webp",
    review:
      "Our Squarespace store redesign was handled quickly and with style. Rahul’s balance of functionality and aesthetics was perfect.",
  },
  {
    id: 12,
    name: "Daniel Scott",
    role: "Lawyer, NortonBasu.com",
    company: "San Jose, USA",
    logo: "/assets/images/brands/squarespace.svg",
    image: "/assets/images/avatars/r12.webp",
    review:
      "Rahul built us a professional Squarespace site for our law practice. Clients frequently compliment us on how clear and modern it looks.",
  },
  {
    id: 13,
    name: "Robert White",
    role: "Marketing Head, Griot’s Garage",
    company: "Seattle, USA",
    logo: "/assets/images/brands/bigcommerce.svg",
    image: "/assets/images/avatars/r13.webp",
    review:
      "Our BigCommerce store needed advanced customization, and Rahul delivered. The site now runs smoother, loads faster, and handles thousands of SKUs effortlessly.",
  },
  {
    id: 14,
    name: "Olivia Martin",
    role: "Director, Garrett Popcorn",
    company: "Chicago, USA",
    logo: "/assets/images/brands/bigcommerce.svg",
    image: "/assets/images/avatars/r14.webp",
    review:
      "Rahul optimized our BigCommerce store checkout flow and integrated third-party APIs. The improvements boosted our conversions immediately.",
  },
  {
    id: 15,
    name: "Mark Evans",
    role: "Manager, Wing Tactical",
    company: "Los Angeles, USA",
    logo: "/assets/images/brands/bigcommerce.svg",
    image: "/assets/images/avatars/r15.webp",
    review:
      "Custom development on our BigCommerce site was flawless. Rahul added advanced filtering and product personalization features we’d struggled with before.",
  },
  {
    id: 16,
    name: "Emma Wilson",
    role: "Founder, Freedom Venture",
    company: "Miami, USA",
    logo: "/assets/images/brands/webflow.svg",
    image: "/assets/images/avatars/r16.webp",
    review:
      "Rahul built our Webflow site with precision. The animations, responsive layouts, and CMS integrations all exceeded expectations.",
  },
  {
    id: 17,
    name: "Paul Brown",
    role: "CEO, Temperstack",
    company: "Austin, USA",
    logo: "/assets/images/brands/webflow.svg",
    image: "/assets/images/avatars/r17.webp",
    review:
      "Our SaaS site was migrated to Webflow by Rahul. He made it blazing fast, with dynamic CMS collections for blog and product pages.",
  },
  {
    id: 18,
    name: "Nina Rossi",
    role: "Owner, Proxiware",
    company: "Rome, Italy",
    logo: "/assets/images/brands/webflow.svg",
    image: "/assets/images/avatars/r18.webp",
    review:
      "Rahul helped me design my Webflow portfolio. His clean layouts and subtle animations made it stand out from competitors.",
  },
  {
    id: 19,
    name: "Victor Nguyen",
    role: "COO, RedHorse Contractors",
    company: "Texas, USA",
    logo: "/assets/images/brands/webflow.svg",
    image: "/assets/images/avatars/r19.webp",
    review:
      "We needed a corporate Webflow site that felt professional and scalable. Rahul nailed it — it’s now the centerpiece of our online presence.",
  },
  {
    id: 20,
    name: "Rachel Kim",
    role: "Marketing Lead, Digital Trend Media",
    company: "Berlin, Germany",
    logo: "/assets/images/brands/webflow.svg",
    image: "/assets/images/avatars/r20.webp",
    review:
      "From concept to delivery, Rahul handled our Webflow build seamlessly. The site is fast, SEO-friendly, and beautifully designed.",
  },
];


export default function Reviews() {
  const swiperRef = useRef(null);

  return (
    <div id="reviews" className="reviews section panel overflow-hidden">
      <div className="section-outer panel xl:pb-5 pb-6">
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

              {/* Slider */}
              <div className="row child-cols  items-center justify-center lg:gy-8 gap-2 lg:gap-2 mt-1">
                <div className="panel swiper-parent w-full max-w-7xl">
                  <Swiper
                    className="review-swiper "
                     modules={[Autoplay, Pagination]} // 👈 important
                    slidesPerView={3}
                    spaceBetween={24}
                    centeredSlides={false}
                    loop={true}
                    autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                    }}
                  
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 16 },
                      768: { slidesPerView: 2, spaceBetween: 20 },
                      1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    onSwiper={(swiper) => {
                      swiper.update(); // force recalculation of widths after mount
                    }}
                  >
                    {reviews.map((r) => (
                      <SwiperSlide key={r.id}>
                        <div className="bg-secondary dark:bg-dark-2 rounded-3 b border h-500px p-2 flex flex-col h-full">
                          {/* Top row: avatar + logo */}
                          <div className="hstack flex items-start justify-between mb-6">
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
                              <div className="flex items-center gap-3 border p-1 rounded-3">
                                <Image
                                  src={r.logo}
                                  alt={r.role}
                                  width={80}
                                  height={20}
                                  className="object-contain"
                                />
                              </div>
                            )}
                          </div>

                          {/* Quote */}

                          <svg
                            width="101"
                            height="101"
                            viewBox="0 0 101 101"
                            fill="none"
                            className="w-32px h-32px mb-2"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M42.9074 82.14H15.2017V47.7851C15.2017 38.5498 17.0488 31.5311 20.7428 26.7288C24.8063 21.7417 31.6404 18.8788 41.245 18.14V34.4863C37.9203 34.4863 35.1498 35.8716 32.9333 38.6422C31.8251 40.1198 31.271 42.9827 31.271 47.2309V52.495H42.9074V82.14ZM86.1281 82.14H58.4225V47.7851C58.4225 38.5498 60.0848 31.8081 63.4095 27.5599C67.8424 22.0188 74.8612 18.8788 84.4658 18.14V34.4863C78.74 34.4863 75.5076 37.3493 74.7688 43.0751C74.5841 43.8139 74.4918 45.1992 74.4918 47.2309V52.495H86.1281V82.14Z"
                              fill="black"
                            />
                          </svg>

                          <p className="h4 fw-light h-100px text-dark dark:text-white text-opacity-80 italic leading-relaxed flex-1 mt-0 ">
                            {r.review}
                          </p>

                          {/* Company */}
                          <div className="vstack mt-12">
                            <span className="fw-bold text-sm">{r.name}</span>
                            <span className="fs-7 text-gray-500">{r.role}</span>
                            <span className="fs-8 text-gray-400 mt-0">
                              {r.company}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* CTA */}
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

      {/* small global tweaks so slides don't stretch vertically */}
      <style jsx global>{`
        .review-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .review-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
}
