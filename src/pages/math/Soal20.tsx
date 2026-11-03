import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Toples keciput berisi [[7|10]] bagian. Seorang tamu mengambil [[3|10]] bagian, kemudian seorang anak mengambil [[1|10]] bagian. Berapa bagian toples keciput yang tersisa?",
  known: [
    "Isi awal = [[7|10]] bagian",
    "Tamu mengambil [[3|10]]",
    "Anak mengambil [[1|10]]",
  ],
  asked: "Berapa bagian toples keciput yang tersisa?",
  solution: [
    "Total diambil = [[3|10]] + [[1|10]] = [[4|10]] bagian.",
    "Sisa = [[7|10]] - [[4|10]] = [[3|10]] bagian.",
  ],
  answers: ["3/10", "3 per 10"],
  displayAnswer: "[[3|10]] bagian",
  answerText: "tiga per sepuluh bagian",
  explanationText:
    "Total yang diambil adalah empat per sepuluh. Sisa tujuh per sepuluh dikurangi empat per sepuluh, sama dengan tiga per sepuluh bagian.",
  visual: "Keciput",
}

export default createQuestionPage(question, 20)
