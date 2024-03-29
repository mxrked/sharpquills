/**
 *
 *  This is the Desktop Nav
 *
 */

import { useState } from "react";
import { useRouter } from "next/router";

import { FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  const [typesCBHovered, setTypesCBHovered] = useState(false);
  const [productsCBHovered, setProductsCBHovered] = useState(false);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-6 col-xs-4`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                {router.pathname !== "/" ? (
                  <a
                    href="/"
                    className={`${styles.logo}`}
                    title="Sharpquills - Logo."
                  >
                    <LazyLoadImage
                      src={LOGO}
                      className="orientation-change-element half-second"
                    />

                    <div>
                      <span
                        className={`${styles.top_text} orientation-change-element half-second`}
                      >
                        SHARPQUILLS
                      </span>
                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        ALL THINGS HEDGIE.
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className={`${styles.logo}`} title="Sharpquills - Logo.">
                    <LazyLoadImage
                      src={LOGO}
                      alt={"Sharpquills - Logo."}
                      className="orientation-change-element half-second"
                    />

                    <div>
                      <span
                        className={`${styles.top_text} orientation-change-element half-second`}
                      >
                        SHARPQUILLS
                      </span>
                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        ALL THINGS HEDGIE.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul className={`${styles.desktop_nav_main_links}`}>
                  {router.pathname !== "/" ? (
                    <li>
                      <a
                        href="/"
                        className="orientation-change-element half-second"
                      >
                        <span>HOME</span>
                      </a>
                    </li>
                  ) : (
                    <li style={{ opacity: 0.5, pointerEvents: "none" }}>
                      <span className="orientation-change-element half-second">
                        HOME
                      </span>
                    </li>
                  )}

                  {router.pathname !== "/store" ? (
                    <li className={`${styles.products_link_li}`}>
                      <div>
                        STORE
                        <FaCaretDown className={`${styles.icon}`} />
                        <input
                          type="checkbox"
                          onMouseEnter={(e) => {
                            setProductsCBHovered(true);
                          }}
                          onMouseLeave={(e) => {
                            setProductsCBHovered(false);
                          }}
                          onChange={(e) => {
                            if (e.currentTarget.checked) {
                              document.getElementById(
                                "desktopProductsSubLinks"
                              ).style.display = "block";
                            } else {
                              document.getElementById(
                                "desktopProductsSubLinks"
                              ).style.display = "none";
                            }
                          }}
                          onBlur={(e) => {
                            e.currentTarget.checked = false;
                            if (productsCBHovered) {
                              setTimeout(() => {
                                document.getElementById(
                                  "desktopProductsSubLinks"
                                ).style.display = "none";
                              }, 200);
                            } else {
                              document.getElementById(
                                "desktopProductsSubLinks"
                              ).style.display = "none";
                            }
                          }}
                        />
                      </div>

                      <ul
                        id="desktopProductsSubLinks"
                        className={`${styles.sub_links} ${styles.products_sub_links}`}
                        onMouseEnter={(e) => {
                          setProductsCBHovered(true);
                        }}
                        onMouseLeave={(e) => {
                          setProductsCBHovered(false);
                        }}
                      >
                        <li>
                          <a
                            href="/store#food"
                            className="orientation-change-element half-second"
                          >
                            <span>Food</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/store#toys"
                            className="orientation-change-element half-second"
                          >
                            <span>Toys</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/store#housing"
                            className="orientation-change-element half-second"
                          >
                            <span>Housing</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/store"
                            className="orientation-change-element half-second"
                          >
                            <span>View All</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li
                      className={`${styles.products_link_li}`}
                      style={{ opacity: 0.5, pointerEvents: "none" }}
                    >
                      <div>
                        STORE
                        <FaCaretDown className={`${styles.icon}`} />
                      </div>
                    </li>
                  )}

                  {router.pathname !== "/types" ? (
                    <li className={`${styles.types_link_li}`}>
                      <div>
                        TYPES
                        <FaCaretDown className={`${styles.icon}`} />
                        <input
                          type="checkbox"
                          onMouseEnter={(e) => {
                            setTypesCBHovered(true);
                          }}
                          onMouseLeave={(e) => {
                            setTypesCBHovered(false);
                          }}
                          onChange={(e) => {
                            if (e.currentTarget.checked) {
                              document.getElementById(
                                "desktopTypesSubLinks"
                              ).style.display = "block";
                            } else {
                              document.getElementById(
                                "desktopTypesSubLinks"
                              ).style.display = "none";
                            }
                          }}
                          onBlur={(e) => {
                            e.currentTarget.checked = false;
                            if (typesCBHovered) {
                              setTimeout(() => {
                                document.getElementById(
                                  "desktopTypesSubLinks"
                                ).style.display = "none";
                              }, 200);
                            } else {
                              document.getElementById(
                                "desktopTypesSubLinks"
                              ).style.display = "none";
                            }
                          }}
                        />
                      </div>

                      <ul
                        id="desktopTypesSubLinks"
                        className={`${styles.sub_links} ${styles.types_sub_links}`}
                        onMouseEnter={(e) => {
                          setTypesCBHovered(true);
                        }}
                        onMouseLeave={(e) => {
                          setTypesCBHovered(false);
                        }}
                      >
                        <li>
                          <a
                            href="/types#atelerix"
                            className="orientation-change-element half-second"
                          >
                            <span>Atelerix</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/types#erinaceus"
                            className="orientation-change-element half-second"
                          >
                            <span>Erinaceus</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/types#hemiechinus"
                            className="orientation-change-element half-second"
                          >
                            <span>Hemiechinus</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/types#mesechinus"
                            className="orientation-change-element half-second"
                          >
                            <span>Mesechinus</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/types#paraechinus"
                            className="orientation-change-element half-second"
                          >
                            <span>Paraechinus</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/types"
                            className="orientation-change-element half-second"
                          >
                            <span>View All</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li
                      className={`${styles.types_link_li}`}
                      style={{ opacity: 0.5, pointerEvents: "none" }}
                    >
                      <div>
                        TYPES
                        <FaCaretDown className={`${styles.icon}`} />
                      </div>
                    </li>
                  )}

                  {router.pathname !== "/info" ? (
                    <li>
                      <a
                        href="/info"
                        className="orientation-change-element half-second"
                      >
                        <span>INFO</span>
                      </a>
                    </li>
                  ) : (
                    <li style={{ opacity: 0.5, pointerEvents: "none" }}>
                      <span className="orientation-change-element half-second">
                        INFO
                      </span>
                    </li>
                  )}

                  {router.pathname !== "/contact" ? (
                    <li>
                      <a
                        href="/contact"
                        className="orientation-change-element half-second"
                      >
                        <span>CONTACT</span>
                      </a>
                    </li>
                  ) : (
                    <li style={{ opacity: 0.5, pointerEvents: "none" }}>
                      <span className="orientation-change-element half-second">
                        CONTACT
                      </span>
                    </li>
                  )}
                </ul>

                {router.pathname !== "/cart" ? (
                  <a href="/cart" className={`${styles.cart_link}`}>
                    <FaShoppingCart
                      className={`${styles.icon} half-second orientation-change-element`}
                    />

                    <div>
                      <span className="cart-counter">...</span>
                    </div>
                  </a>
                ) : (
                  <div className={`${styles.cart_link}`}>
                    <FaShoppingCart
                      className={`${styles.icon} half-second orientation-change-element`}
                    />

                    <div>
                      <span className="cart-counter">...</span>
                    </div>
                  </div>
                )}

                <button
                  className={`${styles.search_toggler} search-toggler orientation-change-element half-second`}
                >
                  <FaSearch className={`${styles.icon}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
