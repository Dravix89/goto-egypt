import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div>
          <Link href="/" className="brand" aria-label="GOTOEGYPT, accueil">
            <Image
              src="/logo05.png"
              alt="GOTOEGYPT"
              width={240}
              height={80}
              className="footer-logo"
              style={{ width: "auto", height: "clamp(40px, 5vw, 70px)" }}
            />
          </Link>
          <p className="muted">
            Voyages sur mesure au coeur de l'Égypte ancienne.
          </p>
        </div>
        <nav aria-label="Pied de page">
          <Link href="/explorer">Explorer</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="muted small">2026 GOTOEGYPT. Tous Droits Réservés.</p>
      </div>
    </footer>
  );
}
