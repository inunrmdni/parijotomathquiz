type KudusFoodIconProps = {
  name: string
  labelled?: boolean
}

export function KudusFoodIcon({ name, labelled = false }: KudusFoodIconProps) {
  const kind = name.toLowerCase()

  return (
    <span className={`food-icon food-${kind.replace(/\s+/g, "-")}`}>
      <svg viewBox="0 0 64 64" role="img" aria-label={name}>
        {kind.includes("jenang") && (
          <>
            <path className="food-tray" d="M8 41h48l-5 12H13Z" />
            <path
              className="food-leaf"
              d="M11 40c9-12 31-16 43-3-15-5-29-3-43 3Z"
            />
            <rect
              className="food-main"
              x="15"
              y="25"
              width="11"
              height="15"
              rx="3"
            />
            <rect
              className="food-accent"
              x="27"
              y="20"
              width="12"
              height="20"
              rx="3"
            />
            <rect
              className="food-main"
              x="40"
              y="26"
              width="10"
              height="14"
              rx="3"
            />
            <path className="food-line" d="M19 29h3m9-4h4m9 5h2" />
          </>
        )}
        {(kind.includes("lentog") || kind.includes("lontong")) && (
          <>
            <path
              className="food-bowl"
              d="M9 31h46c-2 17-10 23-23 23S11 48 9 31Z"
            />
            <path className="food-rim" d="M8 30c0-5 48-5 48 0s-48 5-48 0Z" />
            <path className="food-leaf" d="m17 28 8-18 9 18Zm17 0 7-15 8 15Z" />
            <path
              className="food-steam"
              d="M24 9c-4-4 4-6 0-10m16 10c4-4-4-6 0-10"
            />
          </>
        )}
        {kind.includes("nasi") && (
          <>
            <path className="food-leaf" d="M10 46 19 14l34 8-7 31Z" />
            <path
              className="food-main"
              d="M18 38c3-13 23-17 30-5l-3 13-29-1Z"
            />
            <path
              className="food-accent"
              d="M24 33c5-5 15-5 19 1-7-2-12-1-19-1Z"
            />
            <path className="food-line" d="m19 15 27 36M13 40l37-18" />
          </>
        )}
        {kind.includes("soto") && (
          <>
            <path
              className="food-bowl"
              d="M8 30h48c-2 17-11 24-24 24S10 47 8 30Z"
            />
            <path className="food-rim" d="M7 29c0-6 50-6 50 0s-50 6-50 0Z" />
            <circle className="food-main" cx="23" cy="28" r="5" />
            <circle className="food-accent" cx="38" cy="27" r="4" />
            <path className="food-leaf" d="m28 28 7-7 8 7Z" />
            <path
              className="food-steam"
              d="M23 15c-5-5 4-7 0-13m18 13c5-5-4-7 0-13"
            />
          </>
        )}
        {kind.includes("keciput") && (
          <>
            <path className="food-jar" d="M15 18h34l-3 36H18Z" />
            <rect
              className="food-lid"
              x="13"
              y="11"
              width="38"
              height="9"
              rx="3"
            />
            <circle className="food-main" cx="25" cy="32" r="6" />
            <circle className="food-accent" cx="39" cy="30" r="6" />
            <circle className="food-main" cx="33" cy="43" r="6" />
            <path
              className="food-seed"
              d="m22 30 2 1m12-3 2 1m-7 13 2 1m7-10 2 1"
            />
          </>
        )}
      </svg>
      {labelled && <span>{name}</span>}
    </span>
  )
}

export function KudusFoodShowcase() {
  return (
    <div className="food-showcase" aria-label="Makanan khas Kudus">
      {["Jenang", "Lentog", "Nasi jangkrik", "Soto", "Keciput"].map((food) => (
        <KudusFoodIcon key={food} name={food} labelled />
      ))}
    </div>
  )
}
