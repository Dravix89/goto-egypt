import Sky from "./Sky";
import { DuneEdge } from "./Dunes";

export default function PageHero({ kicker, title, text }) {
  return (
    <section className="page-hero">
      <Sky />
      <div className="page-hero-in">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
      <DuneEdge />
    </section>
  );
}
