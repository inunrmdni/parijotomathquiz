import { ActionButton } from "../../components/ActionButton"
import { Bunny } from "../../components/Bunny"

type QuizHeaderProps = {
  currentQuestion: number
  questionCount: number
  shareStatus: string
  onHome: () => void
  onShare: () => void
}

export function QuizHeader({
  currentQuestion,
  questionCount,
  shareStatus,
  onHome,
  onShare,
}: QuizHeaderProps) {
  return (
    <header className="quiz-header">
      <ActionButton
        className="icon-button home-button"
        onClick={onHome}
        ariaLabel="Kembali ke halaman utama"
      >
        ⌂
      </ActionButton>
      <div className="progress-wrap">
        <p>
          Soal {currentQuestion} dari {questionCount}
        </p>
        <div className="progress-track">
          <span
            style={{ width: `${(currentQuestion / questionCount) * 100}%` }}
          />
        </div>
      </div>
      <div className="header-actions">
        {shareStatus && <span className="share-status">{shareStatus}</span>}
        <ActionButton
          className="icon-button share-button"
          onClick={onShare}
          ariaLabel={`Bagikan soal ${currentQuestion}`}
        >
          ↗
        </ActionButton>
        <div className="helper-mascot">
          <Bunny small />
        </div>
      </div>
    </header>
  )
}
