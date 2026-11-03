import type { RefObject } from "react"
import { KudusFoodIcon } from "../../components/KudusFoodIcon"
import { MathText } from "../../components/MathText"
import type { Question } from "../../pages/math/types"

export type QuestionPageProps = {
  answer: string
  answerRef: RefObject<HTMLInputElement | null>
  setAnswer: (answer: string) => void
  onSubmit: () => void
}

function FractionAnswerInput({
  answer,
  answerRef,
  setAnswer,
  isMixed,
}: Pick<QuestionPageProps, "answer" | "answerRef" | "setAnswer"> & {
  isMixed: boolean
}) {
  const [whole = "", fractionValue = ""] = isMixed
    ? answer.split(" ")
    : ["", answer]
  const [numerator = "", denominator = ""] = fractionValue.split("/")

  const updateAnswer = (
    nextWhole: string,
    nextNumerator: string,
    nextDenominator: string,
  ) => {
    const fraction = `${nextNumerator}/${nextDenominator}`
    setAnswer(isMixed ? `${nextWhole} ${fraction}`.trim() : fraction)
  }

  return (
    <fieldset className="fraction-answer-field">
      <legend>Jawabanmu</legend>
      <div className="fraction-answer-row">
        {isMixed && (
          <label className="whole-answer">
            <span>Bilangan bulat</span>
            <input
              inputMode="numeric"
              value={whole}
              onChange={(event) =>
                updateAnswer(
                  event.target.value.replace(/\D/g, ""),
                  numerator,
                  denominator,
                )
              }
              aria-label="Bilangan bulat"
            />
          </label>
        )}
        <div className="stacked-answer" aria-label="Isian pecahan">
          <label>
            <span>Pembilang</span>
            <input
              ref={answerRef}
              inputMode="numeric"
              value={numerator}
              onChange={(event) =>
                updateAnswer(
                  whole,
                  event.target.value.replace(/\D/g, ""),
                  denominator,
                )
              }
              aria-label="Pembilang"
            />
          </label>
          <span className="answer-fraction-line" aria-hidden="true" />
          <label>
            <input
              inputMode="numeric"
              value={denominator}
              onChange={(event) =>
                updateAnswer(
                  whole,
                  numerator,
                  event.target.value.replace(/\D/g, ""),
                )
              }
              aria-label="Penyebut"
            />
            <span>Penyebut</span>
          </label>
        </div>
      </div>
      <p className="answer-hint">
        Isi pembilang dan penyebut pada kotak yang tersedia.
      </p>
    </fieldset>
  )
}

export function createQuestionPage(question: Question, questionNumber: number) {
  return function QuestionPage({
    answer,
    answerRef,
    setAnswer,
    onSubmit,
  }: QuestionPageProps) {
    const fractionAnswer = question.displayAnswer.match(
      /\[\[(?:(\d+);)?([^|\]]+)\|([^\]]+)\]\]/,
    )
    const usesFractionInput = Boolean(fractionAnswer)
    const isMixedFraction = Boolean(fractionAnswer?.[1])
    const answerParts = answer.match(/\d+/g) ?? []
    const isAnswerComplete = usesFractionInput
      ? answerParts.length === (isMixedFraction ? 3 : 2)
      : Boolean(answer.trim())

    return (
      <div className="quiz-content essay-content">
        <div className="question-label">TANTANGAN {questionNumber}</div>
        <div className="question-card essay-card">
          <span className="card-sparkle sparkle-left">✦</span>
          <span className="card-sparkle sparkle-right">★</span>
          <div className="question-visual">
            <KudusFoodIcon name={question.visual} />
            <span>{question.visual}</span>
          </div>
          <p className="essay-question">
            <MathText text={question.prompt} />
          </p>
          {usesFractionInput ? (
            <FractionAnswerInput
              answer={answer}
              answerRef={answerRef}
              setAnswer={setAnswer}
              isMixed={isMixedFraction}
            />
          ) : (
            <label className="essay-answer-box">
              <span>Jawabanmu</span>
              <input
                ref={answerRef}
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && onSubmit()}
                placeholder="Ketik jawaban di sini..."
                aria-label="Ketik jawabanmu"
              />
            </label>
          )}
        </div>
        <button
          type="button"
          className={`action-button submit-button ${
            !isAnswerComplete ? "disabled" : ""
          }`}
          onClick={() => isAnswerComplete && onSubmit()}
        >
          Periksa Jawaban <span>★</span>
        </button>
      </div>
    )
  }
}
