function Cloud({ className }: { className: string }) {
  return <span className={`cloud ${className}`} aria-hidden="true" />
}

export function FloatingDecor() {
  return (
    <div className="decor" aria-hidden="true">
      <Cloud className="cloud-one" />
      <Cloud className="cloud-two" />
      <Cloud className="cloud-three" />
      <span className="float-star star-one">★</span>
      <span className="float-star star-two">★</span>
      <span className="float-star star-three">✦</span>
      <span className="balloon balloon-one">●</span>
      <span className="balloon balloon-two">●</span>
      <span className="batik-flower batik-one">✣</span>
      <span className="batik-flower batik-two">✣</span>
    </div>
  )
}
