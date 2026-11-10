// Ciel étoilé déterministe (même rendu serveur / client)
export default function Sky() {
  let s = 7;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const stars = Array.from({ length: 110 }, (_, i) => ({
    x: rnd() * 100,
    y: rnd() * 85,
    r: 1 + rnd() * 1.6,
    d: rnd() * 6,
    big: i % 9 === 0,
  }));
  return (
    <div className="sky" aria-hidden="true">
      {stars.map((st, i) => (
        <span
          key={i}
          className={st.big ? "star big" : "star"}
          style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.r, height: st.r, animationDelay: `${st.d}s` }}
        />
      ))}
    </div>
  );
}
