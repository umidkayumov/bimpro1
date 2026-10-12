"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Icon";
import styles from "./Header.module.css";

const NAV = [
  { label: "Kurslar", href: "#kurslar" },
  { label: "Biznes uchun (B2B)", href: "#biznes" },
  { label: "Biz haqimizda", href: "#biz-haqimizda" },
  { label: "Aloqa", href: "#aloqa" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Link
            href="/"
            id="header-logo"
            aria-label="BIMPro Academy bosh sahifa"
            onClick={handleLinkClick}
          >
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Asosiy navigatsiya">
            <ul className={styles.nav}>
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={styles.link}
                    id={`nav-${item.href.slice(1)}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className={styles.desktopCta}>
          <a href="#" id="header-login" className={styles.ghost}>
            Tizimga kirish
          </a>
          <a href="#" id="header-register" className={styles.primary}>
            Ro’yhatdan o’tish
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span
            className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLineTop : ""}`}
          />
          <span
            className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLineMid : ""}`}
          />
          <span
            className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLineBot : ""}`}
          />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-nav"
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobil navigatsiya">
          <ul className={styles.mobileNavList}>
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.mobileCta}>
          <a
            href="#"
            className={styles.mobileGhost}
            onClick={handleLinkClick}
          >
            Tizimga kirish
          </a>
          <a
            href="#"
            className={styles.mobilePrimary}
            onClick={handleLinkClick}
          >
            Ro’yhatdan o’tish
          </a>
        </div>
      </div>
    </header>
  );
}
