"use client";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks3, socialLinks } from "@/data/footer";

export default function Footer4() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer pb-4 lg:pb-2 dark:bg-gray-900 dark:text-white">
        <div className="uc-footer-cta py-4 sm:py-6 border-bottom">
          <div className="container max-w-xl">
            <div className="uc-footer-inner panel vstack lg:hstack justify-between items-center text-center ltr:lg:text-start rtl:lg:text-end gap-3 sm:gap-4">
              <div className="vstack gap-2">
                <h2 className="h3 xl:h2 m-0">Sign up now or never!</h2>
                <p className="fs-6 xl:fs-4 text-dark dark:text-white text-opacity-70 dark:text-white">
                  Stay up to date with the latest news, announcements, and
                  articles.
                </p>
              </div>
              <div className="panel w-100 sm:w-350px xl:w-450px">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="row child-cols g-1"
                >
                  <div>
                    <div className="form-group inline-block">
                      <input
                        type="email"
                        className="form-control rounded-default h-48px w-full text-black bg-white"
                        placeholder="Your email.."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-auto">
                    <button className="btn btn-md btn-primary rounded-default w-full h-48px text-white">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="uc-footer-content pt-6 lg:pt-4">
          <div className="container max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-4 xl:gap-4">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-4">
                    <div className="panel vstack items-start gap-3 xl:gap-4 ltr:md:pe-8 rtl:md:ps-8">
                      <div>
                        <Link href={`/`} style={{ width: 140 }}>
                          <Image
                            className="text-primary"
                            alt="Lexend"
                            src="/assets/images/common/logo-1.webp"
                            width="250"
                            height="80"
                          />
                        </Link>
                        <p className="mt-2">
                          Design amazing digital experiences that create more
                          happy in the world.
                        </p>
                      </div>
                      {/* <LanguageSelect /> */}
                    </div>
                  </div>
                  {footerLinks3.map((section, index) => (
                    <div key={index} className={section.extraClass || ""}>
                      <ul className="nav-y gap-1 fw-medium">
                        {section.links.map((link, idx) => (
                          <li key={idx}>
                            {idx === 0 ? (
                              <span className="fs-5 dark:text-gray-300">
                               {section.title}
                              </span>
                            ) :     <Link
                              href={link.href}
                              className={
                                idx === 0
                                  ? "fs-5 dark:text-gray-300"
                                  : "fs-8"
                              }
                            >
                              {link.label}
                            </Link>}
                         
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-2 justify-between text-center pt-2 lg:pt-2 border-top dark:text-white">
                <p className="opacity-60 fs-8">
                  Prowebcoder © 2025, All rights reserved.
                </p>
                <ul className="nav-x justify-center gap-2 text-gray-300">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
