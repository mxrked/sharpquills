/**
 *
 *  This is the Mobile Nav
 *
 */

import { useState } from "react";
import { useRouter } from "next/router";

import {
  FaCaretDown,
  FaHamburger,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  return <nav id="mobileNav" className={`${styles.mobile_nav}`}></nav>;
};
