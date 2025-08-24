"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/portfolio";
import { openPortfolioWith } from "@/utlis/togglePortfolioModal"; // <-- import this

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = ["all", "shopify", "ecommerce", "squarespace", "wordpress", "React"];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(activeTab));

  return (
    <div id="portfolio" className="portfolio section panel overflow-hidden ">
      <div className="section-outer panel py-4 md:py-6 xl:py-9 rounded-1-5 lg:rounded-2">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="vstack items-center gap-4 sm:gap-6 xl:gap-8">
              {/* Heading */}
              <div
                className="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-primary dark:text-secondary">Our Portfolio</span>
                <h2 className="title h3 lg:h2 xl:h1 m-0">Our Recent Projects</h2>
              </div>

              {/* Tabs */}
              <div className="hstack flex-wrap justify-center gap-2 sm:gap-3 xl:gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`btn btn-sm rounded-default ${
                      activeTab === cat ? "btn-primary" : "btn-light text-dark dark:btn-dark"
                    }`}
                  >
                    {cat === "all" ? "All Projects" : cat}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div
                className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-4 xl:gx-4 xl:gy-6"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
              >
                {filteredProjects.map((project) => (
                  <div key={project.projId}>
                    <div className="panel vstack gap-2 xl:gap-3 text-center">
                      <Image
                        className="w-100 rounded-1 sm:rounded-1-5"
                        src={`/${project.mainImage}`}
                        width={560}
                        height={360}
                        alt={project.name}
                      />
                      <div className="panel vstack items-center gap-narrow">
                        <h6 className="h6 xl:h5 m-0">{project.name}</h6>
                        <button
                          onClick={() => openPortfolioWith(project)} // <-- open global modal with payload
                          className="btn btn-sm btn-outline-primary rounded-default mt-2"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
