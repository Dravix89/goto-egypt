import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Explorer | GOTOEGYPT." };

const places = [
  {
    name: "Pyramides De Gizeh",
    image: "/p.gizeh.jpg",
    where: "Le Caire",
    time: "1 jour",
    text: "Khéops, Khéphren et Mykérinos veillent sur le plateau depuis plus de quatre mille ans. Visite au lever du soleil, avant la foule, et passage au pied du Sphinx.",
  },
  {
    name: "Pyramide Rouge",
    image: "/p.rouge.jpg",
    where: "Dahchour",
    time: "Demi-journée",
    text: "La première vraie pyramide à faces lisses, bâtie par Snéfrou. On peut descendre dans la chambre intérieure, en silence et sans file d'attente.",
  },
  {
    name: "Vallée Des Rois",
    image: "/p.rois.jpg",
    where: "Louxor",
    time: "1 jour",
    text: "Soixante tombes creusées dans la roche, dont celle de Toutânkhamon, aux plafonds encore couverts de pigments.",
  },
  {
    name: "Temple De Karnak",
    image: "/t.karnak.jpg",
    where: "Louxor",
    time: "Demi-journée",
    text: "Un site de deux mille ans de construction, avec sa forêt de cent trente-quatre colonnes dans la salle hypostyle.",
  },
  {
    name: "Croisière Sur Le Nil",
    image: "/r.nil.jpg",
    where: "Louxor à Assouan",
    time: "4 nuits",
    text: "Quatre nuits en dahabeya entre Edfou et Kom Ombo, avec escales dans les temples au coucher du soleil.",
  },
];

export default function Explorer() {
  return (
    <>
      <PageHero
        kicker="Destinations"
        title="Explorer L'Égypte Ancienne"
        text="Cinq étapes choisies pour comprendre trois mille ans d'histoire, du plateau de Gizeh aux rives du Nil."
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
        <div className="wrap list">
          {places.map((p, i) => (
            <article key={p.name} className={i % 2 ? "place flip" : "place"}>
              <div className="photo">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width:820px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="meta">
                  {p.where} - {p.time}
                </p>
                <h2>{p.name}</h2>
                <p>{p.text}</p>
                <Link href="/contact" className="link">
                  Demander un devis
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
