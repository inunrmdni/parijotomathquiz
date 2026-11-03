// src/features/quiz/quizUtils.ts

export type Screen = "welcome" | "quiz" | "finish"
export type Feedback = "correct" | "incorrect" | null

export type QuizRoute = {
  screen: Screen
  questionIndex: number
}

export function getRoute(questionCount: number): QuizRoute {
  const questionMatch = window.location.pathname.match(/\/math\/soal(\d+)\/?$/)
  if (questionMatch) {
    const questionIndex = Number(questionMatch[1]) - 1
    if (questionIndex >= 0 && questionIndex < questionCount)
      return { screen: "quiz", questionIndex }
  }

  if (/\/math\/hasil\/?$/.test(window.location.pathname)) {
    return { screen: "finish", questionIndex: questionCount - 1 }
  }

  return { screen: "welcome", questionIndex: 0 }
}

export function navigateTo(path: string) {
  window.history.pushState({}, "", path)
  window.dispatchEvent(new PopStateEvent("popstate"))
}

export function isCorrectAnswer(answer: string, acceptedAnswers: string[]) {
  const normalizedAnswer = normalizeAnswer(answer)
  return acceptedAnswers.some(
    (acceptedAnswer) => normalizeAnswer(acceptedAnswer) === normalizedAnswer,
  )
}

function normalizeAnswer(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s*,\s*/g, ",")
    .replace(/\s+/g, " ")
}

export function playFeedbackTone(kind: Exclude<Feedback, null>) {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    const context = new AudioContextClass()
    const notes = kind === "correct" ? [523, 659, 784] : [330, 247]

    notes.forEach((frequency, index) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const startAt = context.currentTime + index * 0.12

      oscillator.frequency.value = frequency
      gain.gain.setValueAtTime(0.12, startAt)
      gain.gain.exponentialRampToValueAtTime(0.001, startAt + 0.22)
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start(startAt)
      oscillator.stop(startAt + 0.23)
    })
  } catch {
    // Visual feedback remains available when browser audio is blocked.
  }
}