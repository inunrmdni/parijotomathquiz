import { ActionButton } from "../components/ActionButton"
import { Bunny } from "../components/Bunny"
import { KudusFoodShowcase } from "../components/KudusFoodIcon"

export function WelcomePage({
  onStart,
  questionCount,
}: {
  onStart: () => void
  questionCount: number
}) {
  return (
    <section className="welcome-page page">
      <div className="brand-pill">
        <span>✦</span> ꦱꦶꦤꦲꦸ · SINAU PECAHAN <span>✦</span>
      </div>
      <div className="welcome-layout">
        <div className="hero-copy">
          <p className="eyebrow">Sugeng Rawuh, Teman Pintar!</p>
          <h1>
            Ayo Sinau
            <br />
            <span>Pecahan!</span>
          </h1>
          <p className="hero-subtitle">
            Jelajahi {questionCount} tantangan pecahan dalam petualangan ceria
            bersama Kiko!
          </p>
          <ActionButton className="start-button" onClick={onStart}>
            Mulai Sinau <span className="button-arrow">➜</span>
          </ActionButton>
          <div className="mini-badges">
            <span>● Jawaban bebas</span>
            <span>★ {questionCount} tantangan</span>
          </div>
          <KudusFoodShowcase />
        </div>
        <div className="mascot-stage">
          <span className="gunungan">♠</span>
          <span className="speech-bubble">Ayo sinau!</span>
          <Bunny />
          <div className="stage-shadow" />
          <span className="ground-flower flower-one">✿</span>
          <span className="ground-flower flower-two">✿</span>
        </div>
      </div>
    </section>
  )
}
