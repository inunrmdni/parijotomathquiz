import { ActionButton } from "../components/ActionButton"
import { Bunny } from "../components/Bunny"

type FinishPageProps = {
  score: number
  questionCount: number
  onRestart: () => void
}

export function FinishPage({
  score,
  questionCount,
  onRestart,
}: FinishPageProps) {
  return (
    <section className="finish-page page">
      <div className="finish-card">
        <div className="confetti-row">★　●　✦　▲　★　●　✦</div>
        <p className="eyebrow">Hebat Sekali!</p>
        <h2>
          Kamu Juara
          <br />
          Pecahan!
        </h2>
        <div className="finish-mascot">
          <Bunny />
        </div>
        <div className="score-pill">
          <span>★</span>
          <strong>{score}</strong> / {questionCount} bintang
        </div>
        <p className="finish-copy">
          Kiko bangga sekali padamu.
          <br />
          Terus belajar dan bermain, ya!
        </p>
        <ActionButton className="start-button" onClick={onRestart}>
          Main Lagi <span className="button-arrow">↻</span>
        </ActionButton>
      </div>
    </section>
  )
}
