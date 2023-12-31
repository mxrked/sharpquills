/**
 *
 *  This is the Mobile Nav Links
 *
 */

import { useRouter } from "next/router";

import { FaCaretDown } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavLinks = () => {
  const router = useRouter();

  return (
    <ul id="mobileNavLinks" className={`${styles.mobile_nav_links}`}>
      {router.pathname !== "/" ? (
        <li>
          <a
            // href="/"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Home</span>
          </a>
        </li>
      ) : (
        <li className={`${styles.disabled}`}>
          <span>Home</span>
        </li>
      )}

      {router.pathname !== "/products" ? (
        <div className="half-second" id="productsCBHolder">
          Products
          <FaCaretDown className={`${styles.icon}`} />
          <input
            id="mobileProductsCB"
            type="checkbox"
            onChange={(e) => {
              if (e.currentTarget.checked) {
                document
                  .getElementById("productsCBHolder")
                  .classList.add("toggle-dropdown");
                document.getElementById("mobileNavProductsLinks").style.height =
                  "100%";
              } else {
                document
                  .getElementById("productsCBHolder")
                  .classList.remove("toggle-dropdown");
                document.getElementById(
                  "mobileNavProductsLinks"
                ).style.height = 0;
              }
            }}
          />
        </div>
      ) : (
        <div>
          Products
          <FaCaretDown className={`${styles.icon}`} />
        </div>
      )}

      <ul id="mobileNavProductsLinks">
        <li>
          <a
            // href="/store#food"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/store#food");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Food</span>
          </a>
        </li>
        <li>
          <a
            // href="/store#toys"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/store#toys");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Toys</span>
          </a>
        </li>
        <li>
          <a
            // href="/store#housing"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/store#housing");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Housing</span>
          </a>
        </li>
        <li>
          <a
            // href="/store"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/store");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>View All</span>
          </a>
        </li>
      </ul>

      {router.pathname !== "/types" ? (
        <div className="half-second" id="typesCBHolder">
          Types
          <FaCaretDown className={`${styles.icon}`} />
          <input
            id="mobileTypesCB"
            type="checkbox"
            onChange={(e) => {
              if (e.currentTarget.checked) {
                document
                  .getElementById("typesCBHolder")
                  .classList.add("toggle-dropdown");
                document.getElementById("mobileNavTypesLinks").style.height =
                  "100%";
              } else {
                document
                  .getElementById("typesCBHolder")
                  .classList.remove("toggle-dropdown");
                document.getElementById("mobileNavTypesLinks").style.height = 0;
              }
            }}
          />
        </div>
      ) : (
        <div>
          Types
          <FaCaretDown className={`${styles.icon}`} />
        </div>
      )}

      <ul id="mobileNavTypesLinks">
        <li>
          <a
            // href="/types#atelerix"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/types#atelerix");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Atelerix</span>
          </a>
        </li>
        <li>
          <a
            href="/types#erinaceus"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/types#erinaceus");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Erinaceus</span>
          </a>
        </li>
        <li>
          <a
            // href="/types#hemiechinus"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/types#hemiechinus");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Hemiechinus</span>
          </a>
        </li>
        <li>
          <a
            // href="/types#mesechinus"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/types#mesechinus");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Mesechinus</span>
          </a>
        </li>
        <li>
          <a
            // href="/types#paraechinus"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/types#paraechinus");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Paraechinus</span>
          </a>
        </li>
        <li>
          <a
            // href="/types"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/types");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>View All</span>
          </a>
        </li>
      </ul>

      {router.pathname !== "/info" ? (
        <li>
          <a
            // href="/info"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/info");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Info</span>
          </a>
        </li>
      ) : (
        <li className={`${styles.disabled}`}>
          <span>Info</span>
        </li>
      )}

      {router.pathname !== "/contact" ? (
        <li>
          <a
            // href="/contact"
            onClick={(e) => {
              e.preventDefault();

              TriggerPageExit();

              setTimeout(() => {
                router.push("/contact");
              }, 1200);
            }}
            className="orientation-change-element half-second"
          >
            <span>Contact</span>
          </a>
        </li>
      ) : (
        <li className={`${styles.disabled}`}>
          <span>Contact</span>
        </li>
      )}
    </ul>
  );
};
