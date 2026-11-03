import { useEffect } from "react"
import { ActionButton } from "../../components/ActionButton"
import { MathText } from "../../components/MathText"
import type { Question } from "../../pages/math/types"
import type { Feedback } from "./quizUtils"
import { playAudio } from "./soundUtils"

type FeedbackModalProps = {
  feedback: Exclude<Feedback, null>
  questionNumber: number
  question: Question
  onContinue: () => void
  onRetry?: () => void
  onExplain: () => void
  onListen: () => void
}

export function FeedbackModal({
  feedback,
  questionNumber,
  question, 
  onContinue,
  onRetry,
  onExplain,
}: FeedbackModalProps) {
  const isCorrect = feedback === "correct"

  // Putar audio lokal otomatis saat modal muncul (benar / salah)
  useEffect(() => {
    if (isCorrect) {
      playAudio("/audio/benar.mp3")
    } else {
      playAudio("/audio/salah.mp3")
    }
  }, [isCorrect])

  return (
    <div 
      className="modal-backdrop" 
      role="presentation"
      style={{ pointerEvents: "auto" }}
    >
      <div
        className={`feedback-modal ${feedback}`}
        role="dialog"
        aria-modal="true"
        aria-live="assertive"
        style={{ pointerEvents: "auto", position: "relative", zIndex: 9999 }}
      >
        <div className="modal-icon">{isCorrect ? "★" : "♥"}</div>
        <div className="sound-chip">
          <span>{isCorrect ? "♪" : "♫"}</span> Suara{" "}
          {isCorrect ? "hore!" : "ups!"}
        </div>
        {isCorrect ? (
          <>
            <h2>Leres, Benar! 🎉</h2>
            <p>
              Jawaban yang tepat adalah{" "}
              <strong>
                <MathText text={question.displayAnswer} />
              </strong>
              .
            </p>
            <div className="movement-card">
              <span className="movement-number">{questionNumber}</span>
              <div>
                <strong>Kartu {questionNumber} selesai!</strong>
                <p>Ayo, maju sesuai dengan nomor yang ada di kartu!</p>
              </div>
            </div>
            <p className="scan-hint">
              Lihat nomor tujuan pada kartu fisikmu, lalu pindai QR code di
              kartu tersebut.
            </p>
            <ActionButton
              className="modal-primary success-button"
              onClick={onContinue}
            >
              Siap, Aku Maju! <span>➜</span>
            </ActionButton>
          </>
        ) : (
          <>
            <h2>
              Belum tepat,
              <br />
              Coba Lagi ya! ❌
            </h2>
            <p>Tidak apa-apa, belajar memang perlu mencoba.</p>
            
            {/* Tombol Dengarkan Penjelasan */}
            <button 
              type="button"
              className="action-button listen-button" 
              onClick={() => {
                playAudio(`/audio/explain-${questionNumber}.mp3`)
              }}
            >
              <span>▶</span> Dengarkan Penjelasan
            </button>

            {/* Tombol Coba Lagi dengan Fail-Safe Mutlak & Z-Index Tertinggi */}
            <button
              type="button"
              className="action-button modal-primary retry-button"
              style={{
                pointerEvents: "auto",
                cursor: "pointer",
                position: "relative",
                zIndex: 999999,
              }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log("🔥 [FINAL] Tombol Coba Lagi Berhasil Diklik!")
                if (typeof onRetry === "function") {
                  onRetry()
                } else {
                  // Fallback otomatis jika parent belum mendefinisikan onRetry
                  window.location.reload()
                }
              }}
            >
              Coba Lagi
            </button>
            
            {/* Tombol Lihat Penjelasan */}
            <button 
              type="button"
              className="action-button explain-button" 
              onClick={onExplain}
            >
              Lihat Penjelasan
            </button>
          </>
        )}
      </div>
    </div>
  )
}

type ExplanationModalProps = {
  question: Question
  questionNumber: number
  onClose: () => void
  onUnderstood: () => void
}

export function ExplanationModal({
  question,
  questionNumber,
  onClose,
  onUnderstood,
}: ExplanationModalProps) {
  useEffect(() => {
    playAudio(`/audio/explain-${questionNumber}.mp3`)
  }, [questionNumber])

  return (
    <div className="modal-backdrop explanation-backdrop" role="presentation" style={{ pointerEvents: "auto" }}>
      <div
        className="explanation-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Penjelasan jawaban"
        style={{ pointerEvents: "auto", position: "relative", zIndex: 9999 }}
      >
        <ActionButton
          className="close-button"
          onClick={onClose}
          ariaLabel="Tutup penjelasan"
        >
          ×
        </ActionButton>
        <span className="explain-badge">YUK, KITA PAHAMI!</span>
        <div className="explanation-symbol">{question.visual}</div>
        <h2>
          Jawaban: <MathText text={question.displayAnswer} />
        </h2>
        <div className="discussion">
          <section>
            <h3>Diketahui:</h3>
            <ul>
              {question.known.map((item) => (
                <li key={item}>
                  <MathText text={item} />
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Ditanya:</h3>
            <p>
              <MathText text={question.asked} />
            </p>
          </section>
          <section className="solution-section">
            <h3>Solusi:</h3>
            {question.solution.map((step) => (
              <p key={step}>
                <MathText text={step} />
              </p>
            ))}
          </section>
        </div>
        <ActionButton
          className="modal-primary explanation-button"
          onClick={onUnderstood}
        >
          Aku Mengerti!
        </ActionButton>
      </div>
    </div>
  )
}