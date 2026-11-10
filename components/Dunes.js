export function DuneEdge() {
  return (
    <svg
      className="dune-edge"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 90 C 200 20, 380 20, 560 70 S 940 130, 1160 60 S 1380 30, 1440 55 L1440 140 L0 140Z"
        fill="#c89666"
      />
      <path
        d="M0 110 C 240 50, 420 60, 640 100 S 1000 140, 1200 90 S 1400 70, 1440 85 L1440 140 L0 140Z"
        fill="#e1b382"
      />
    </svg>
  );
}

export function Pyramids() {
  return (
    <svg className="pyramids" viewBox="0 0 900 300" aria-hidden="true">
      <defs>
        <linearGradient id="lit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0cd9c" />
          <stop offset="1" stopColor="#e1b382" />
        </linearGradient>
        <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c89666" />
          <stop offset="1" stopColor="#a87a50" />
        </linearGradient>
        <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e1b382" stopOpacity="0" />
          <stop offset="1" stopColor="#e1b382" stopOpacity=".95" />
        </linearGradient>
      </defs>
      {/* petite pyramide */}
      <polygon points="690,250 760,150 830,250" fill="url(#shade)" />
      <polygon points="760,150 830,250 790,250" fill="#b98558" />
      {/* grande pyramide */}
      <polygon points="230,255 470,60 640,255" fill="url(#lit)" />
      <polygon points="470,60 640,255 520,255" fill="url(#shade)" />
      {/* pyramide moyenne */}
      <polygon
        points="470,255 600,110 740,255"
        fill="url(#lit)"
        opacity=".95"
      />
      <polygon points="600,110 740,255 650,255" fill="url(#shade)" />
    </svg>
  );
}
