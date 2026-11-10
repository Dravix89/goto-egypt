"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/explorer", label: "Explorer" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={open ? "header open" : "header"}>
      <Link href="/" className="brand" aria-label="GOTOEGYPT, accueil">
        <Image
          src="/logo05.png"
          alt="GOTOEGYPT"
          width={240}
          height={80}
          priority
          className="brand-logo"
          style={{ width: "auto", height: "clamp(60px, 7vw, 110px)" }}
        />
      </Link>

      <button
        type="button"
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="main-nav"
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-nav" aria-label="Navigation principale">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={path === l.href ? "active" : ""}
            aria-current={path === l.href ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
