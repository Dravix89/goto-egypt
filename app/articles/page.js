import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Articles | GOTOEGYPT." };

const articles = [
  {
    t: "Pas Toutânkhamon, Mais Toutânkhaton",
    image: "/toutankhaton.jpg",
    d: "12 Mars 2026",
    r: "5 min",
    x: "Le jeune pharaon est né sous un autre nom. Retour sur le changement de culte qui a transformé son règne et sa tombe.",
  },
  {
    t: "Les Chats Dans Les Pratiques Religieuses",
    image: "/chats.jpg",
    d: "28 Février 2026",
    r: "6 min",
    x: "Bastet, protectrice du foyer, et les milliers de chats momifiés retrouvés à Saqqarah.",
  },
  {
    t: "Comment Les Pyramides Ont Été Construites",
    image: "/pyramides.jpg",
    d: "9 Janvier 2026",
    r: "8 min",
    x: "Rampes, traîneaux, ouvriers salariés : ce que les fouilles récentes ont changé à l'histoire.",
  },
  {
    t: "Lire Les Hiéroglyphes En Dix Signes",
    image: "/hieroglyphes.jpg",
    d: "15 Décembre 2025",
    r: "7 min",
    x: "Un petit alphabet pour déchiffrer des noms de rois sur les murs des temples.",
  },
];

export default function Articles() {
  const [main, ...rest] = articles;
  return (
    <>
      <PageHero
        kicker="Journal"
        title="Articles"
        text="Des récits courts pour préparer votre voyage ou prolonger la visite."
      />
      <section className="section">
        <svg
          width="0"
          height="0"
          style={{ position: "absolute" }}
          aria-hidden="true"
        >
          <defs>
            <clipPath id="wave-bottom" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V0.94 C0.85,1 0.7,0.9 0.5,0.94 C0.3,0.98 0.15,0.9 0,0.96 Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="wrap">
          <article className="article-featured">
            <div className="photo">
              <Image
                src={main.image}
                alt={main.t}
                fill
                priority
                sizes="(max-width:820px) 100vw, 55vw"
              />
            </div>
            <div>
              <p className="meta">
                À la une - {main.d} - {main.r} de lecture
              </p>
              <h2>{main.t}</h2>
              <p>{main.x}</p>
            </div>
          </article>

          <div className="article-grid">
            {rest.map((a) => (
              <article key={a.t} className="article-card">
                <div className="photo">
                  <Image
                    src={a.image}
                    alt={a.t}
                    fill
                    sizes="(max-width:820px) 100vw, 33vw"
                  />
                </div>
                <p className="meta">
                  {a.d} - {a.r} de lecture
                </p>
                <h3>{a.t}</h3>
                <p>{a.x}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
