import { useEffect, useRef, useState } from "react"

import { FloatingDecor } from "./components/FloatingDecor"
import { ExplanationModal, FeedbackModal } from "./features/quiz/FeedbackModals"
import { QuizHeader } from "./features/quiz/QuizHeader"
import {
  getRoute,
  isCorrectAnswer,
  navigateTo,
  playFeedbackTone,
  type Feedback,
  type QuizRoute,
} from "./features/quiz/quizUtils"
import { FinishPage } from "./pages/FinishPage"
import { questionPages, questions } from "./pages/math"
import { WelcomePage } from "./pages/WelcomePage"

export default function App() {
  const [route, setRoute] = useState<QuizRoute>(() =>
    getRoute(questions.length),
  )
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState<Feedback>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [attemptedWrong, setAttemptedWrong] = useState(false)
  const [shareStatus, setShareStatus] = useState("")
  const answerRef = useRef<HTMLInputElement>(null)

  const { screen, questionIndex } = route
  const question = questions[questionIndex]
  const CurrentQuestionPage = questionPages[questionIndex]

  useEffect(() => {
    if (screen === "quiz" && !feedback) answerRef.current?.focus()
  }, [screen, questionIndex, feedback])

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRoute(questions.length))
      setAnswer("")
      setFeedback(null)
      setShowExplanation(false)
      setAttemptedWrong(false)
      setShareStatus("")
    }

    window.addEventListener("popstate", syncRoute)
    return () => window.removeEventListener("popstate", syncRoute)
  }, [])

  const startQuiz = () => {
    setScore(0)
    navigateTo("/math/soal1")
  }

  const submitAnswer = () => {
    if (!answer.trim()) return

    const isCorrect = isCorrectAnswer(answer, question.answers)
    const nextFeedback = isCorrect ? "correct" : "incorrect"

    setFeedback(nextFeedback)
    if (isCorrect && !attemptedWrong)
      setScore((currentScore) => currentScore + 1)
    if (!isCorrect) setAttemptedWrong(true)
    playFeedbackTone(nextFeedback)
  }

  const retryQuestion = () => {
    setFeedback(null)
    setAnswer("")
  }

  const closeExplanation = () => setShowExplanation(false)

  const understandExplanation = () => {
    closeExplanation()
    retryQuestion()
  }

  const shareQuestion = async () => {
    const shareData = {
      title: `Petualangan Pecahan — Soal ${questionIndex + 1}`,
      text: `Coba jawab soal pecahan nomor ${questionIndex + 1} ini!`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        return
      }

      await navigator.clipboard.writeText(shareData.url)
      setShareStatus("Tautan disalin!")
      window.setTimeout(() => setShareStatus(""), 2200)
    } catch {
      // Closing the native share sheet does not require an error message.
    }
  }

  return (
    <main className={`app-shell ${feedback ? `edge-${feedback}` : ""}`}>
      <FloatingDecor />

      {screen === "welcome" && (
        <WelcomePage onStart={startQuiz} questionCount={questions.length} />
      )}

      {screen === "quiz" && (
        <section className="quiz-page page">
          <QuizHeader
            currentQuestion={questionIndex + 1}
            questionCount={questions.length}
            shareStatus={shareStatus}
            onHome={() => navigateTo("/math")}
            onShare={shareQuestion}
          />
          <CurrentQuestionPage
            answer={answer}
            answerRef={answerRef}
            setAnswer={setAnswer}
            onSubmit={submitAnswer}
          />
        </section>
      )}

      {screen === "finish" && (
        <FinishPage
          score={score}
          questionCount={questions.length}
          onRestart={startQuiz}
        />
      )}

      {feedback && (
        <FeedbackModal
          feedback={feedback}
          questionNumber={questionIndex + 1}
          question={question}
          onContinue={() => setFeedback(null)}
          onRetry={retryQuestion}
          onExplain={() => setShowExplanation(true)}
          onListen={() => {}}
        />
      )}

      {showExplanation && (
        <ExplanationModal
          question={question}
          questionNumber={questionIndex + 1}
          onClose={closeExplanation}
          onUnderstood={understandExplanation}
        />
      )}
    </main>
  )
}