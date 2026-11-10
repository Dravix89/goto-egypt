import Link from "next/link";
import Sky from "@/components/Sky";
import { DuneEdge, Pyramids } from "@/components/Dunes";
import Image from "next/image";

const exps = [
  { name: "Pyramide Rouge", image: "/p.rouge.jpg", where: "Dahchour" },
  {
    name: "Pyramides De Gizeh",
    image: "/p.gizeh.jpg",
    where: "Le Caire",
    main: true,
  },
  { name: "Vallée Des Rois", image: "/p.rois.jpg", where: "Louxor" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Sky />
        <div className="hero-in">
          <p className="kicker">Le monde ancien</p>
          <h1>Découvrez Les Derniers Vestiges De L'Égypte Ancienne</h1>
          <a
            href="#civilisation"
            className="scroll"
            aria-label="Défiler vers la suite"
          >
            <span /> Défiler
          </a>
        </div>
        <div className="hero-scene">
          <Pyramids />
          <DuneEdge />
        </div>
      </section>

      <section id="civilisation" className="section">
        <div className="wrap narrow center">
          <p className="kicker dark">L'Antiquité</p>
          <h2>La Civilisation Égyptienne</h2>
        </div>
        <div className="wrap cols">
          <p>
            L'Égypte ancienne, célèbre pour ses pyramides, ses pharaons, ses
            momies et ses tombeaux, a prospéré pendant des milliers d'années.
            Quel héritage nous a-t-elle laissé&nbsp;?
          </p>
          <p>
            Découvrez comment elle a façonné notre société moderne, de
            l'écriture aux mathématiques, de l'architecture à l'astronomie, et
            comment ses traces se visitent encore aujourd'hui.
          </p>
        </div>
        <div className="wrap">
          <div className="feature">
            <div className="feature-art">
              <svg
                width="0"
                height="0"
                style={{ position: "absolute" }}
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
                    <path d="M0,0 H1 V0.95 C0.88,0.92 0.75,1 0.6,0.98 C0.45,0.96 0.3,0.92 0.18,0.95 C0.1,0.97 0.04,1 0,0.98 Z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="photo photo-wave">
                <Image
                  src="/bastet.jpg"
                  alt="Chat sacré de l'Égypte ancienne"
                  fill
                  sizes="(max-width:820px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="feature-text">
              <h3>Les Chats, Animaux Sacrés</h3>
              <p>
                Dans l'Égypte ancienne, le chat était lié à la protection du
                foyer et à la déesse Bastet. Tuer un chat pouvait être puni
                sévèrement, et beaucoup furent momifiés avec leurs maîtres.
              </p>
              <Link href="/articles" className="link">
                Lire l'article
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section night">
        <svg
          width="0"
          height="0"
          style={{ position: "absolute" }}
          aria-hidden="true"
        >
          <defs>
            <clipPath id="wave-top" clipPathUnits="objectBoundingBox">
              <path d="M0,0.06 C0.15,0 0.3,0.1 0.5,0.06 C0.7,0.02 0.85,0.08 1,0.04 V1 H0 Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="wrap narrow center">
          <p className="kicker">Remontez le temps</p>
          <h2>Nos Expériences</h2>
          <p className="lead light">
            Des monuments magnifiques, des lieux chargés d'histoire et des
            paysages qui n'ont presque pas changé depuis des millénaires.
          </p>
        </div>
        <div className="wrap exp-row">
          {exps.map((e) => (
            <Link
              href="/explorer"
              key={e.name}
              className={e.main ? "exp main" : "exp"}
            >
              <div className="photo">
                <Image src={e.image} alt={e.name} fill sizes="320px" />
              </div>
              <span className="exp-cap">
                <small>{e.where}</small>
                <strong>{e.name}</strong>
              </span>
            </Link>
          ))}
        </div>
        <div className="wrap center">
          <Link href="/explorer" className="btn ghost-light">
            Voir toutes les destinations
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow center">
          <h2>Ils Nous Font Confiance</h2>
          <p className="partners" aria-label="Partenaires">
            <span>Nat Geo Voyage</span>
            <span>Pyramid International</span>
            <span>Nile Press</span>
            <span>Carnets Du Sud</span>
          </p>
          <Link href="/contact" className="btn">
            Réserver
          </Link>
        </div>
      </section>
    </>
  );
}
