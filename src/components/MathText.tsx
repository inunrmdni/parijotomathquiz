import type { ReactNode } from "react"

const FRACTION_PATTERN = /\[\[(?:(-?\d+);)?([^|\]]+)\|([^\]]+)\]\]/g

export function MathText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  let cursor = 0

  for (const match of text.matchAll(FRACTION_PATTERN)) {
    const index = match.index ?? 0
    if (index > cursor) parts.push(text.slice(cursor, index))

    const [, whole, numerator, denominator] = match
    parts.push(
      <span className="math-value" key={`${index}-${match[0]}`}>
        {whole && <span className="whole-number">{whole}</span>}
        <span
          className="fraction"
          aria-label={`${
            whole ? `${whole} ` : ""
          }${numerator} per ${denominator}`}
        >
          <span className="numerator">{numerator}</span>
          <span className="denominator">{denominator}</span>
        </span>
      </span>,
    )
    cursor = index + match[0].length
  }

  if (cursor < text.length) parts.push(text.slice(cursor))
  return <>{parts}</>
}
