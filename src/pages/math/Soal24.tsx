import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Seorang penjual membawa [[5|6]] kg keciput ke pasar. Pagi hari terjual [[1|2]] kg dan siang hari terjual [[1|6]] kg. Berapa kg keciput yang belum terjual?",
  known: [
    "Bawaan = [[5|6]] kg",
    "Terjual pagi = [[1|2]] kg",
    "Siang = [[1|6]] kg.",
  ],
  asked: "Berapa kg keciput yang belum terjual?",
  solution: [
    "Total terjual = [[1|2]] + [[1|6]] = [[4|6]] kg.",
    "Belum terjual = [[5|6]] - [[4|6]] = [[1|6]] kg.",
  ],
  answers: ["1/6", "1 per 6", "⅙"],
  displayAnswer: "[[1|6]] kg",
  answerText: "satu per enam kilogram",
  explanationText:
    "Total terjual adalah satu per dua ditambah satu per enam, sama dengan empat per enam kilogram. Yang belum terjual satu per enam kilogram.",
  visual: "Keciput",
}

export default createQuestionPage(question, 24)
