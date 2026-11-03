type BunnyProps = {
  small?: boolean
}

export function Bunny({ small = false }: BunnyProps) {
  return (
    <div
      className={`bunny ${small ? "bunny-small" : ""}`}
      aria-label="Kiko si kelinci yang ceria"
    >
      <span className="bunny-ear bunny-ear-left" />
      <span className="bunny-ear bunny-ear-right" />
      <span className="blangkon">
        <i />
      </span>
      <div className="bunny-head">
        <span className="bunny-eye bunny-eye-left" />
        <span className="bunny-eye bunny-eye-right" />
        <span className="bunny-nose">♥</span>
        <span className="bunny-cheek bunny-cheek-left" />
        <span className="bunny-cheek bunny-cheek-right" />
        <span className="bunny-mouth">⌣</span>
      </div>
      {!small && (
        <>
          <div className="bunny-body">★</div>
          <span className="bunny-arm">●</span>
        </>
      )}
    </div>
  )
}
