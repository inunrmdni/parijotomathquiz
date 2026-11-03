import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Resep keciput Bu Lilis memerlukan [[2|3]] gelas tepung ketan. Gelas takarnya hanya memiliki tanda pecahan perenam ([[1|6]]). Sampai tanda ke berapa tepung harus dituang?",
  known: [
    "Kebutuhan tepung = [[2|3]] gelas",
    "Gelas takar bertanda kelipatan [[1|6]].",
  ],
  asked: "Sampai tanda ke berapa tepung harus dituang?",
  solution: [
    "[[2|3]] = [[2×2|3×2]] = [[4|6]].",
    "Tepung harus dituang sampai tanda ke-4.",
  ],
  answers: ["4", "tanda ke-4", "tanda ke 4"],
  displayAnswer: "Tanda ke-4",
  answerText: "tanda ke empat",
  explanationText:
    "Dua per tiga sama dengan empat per enam. Tepung harus dituang sampai tanda ke empat.",
  visual: "Keciput",
}

export default createQuestionPage(question, 14)
