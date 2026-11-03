import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Warung A melaporkan [[3|5]] dagangan lentognya habis, sedangkan Warung B melaporkan [[7|10]] dagangannya habis. Kedua warung menyiapkan dagangan sama banyak. Berapa bagian selisih penjualan antara kedua warung tersebut?",
  known: ["Warung A habis [[3|5]] bagian", "Warung B habis [[7|10]] bagian."],
  asked: "Berapa bagian selisih penjualan antara kedua warung tersebut?",
  solution: [
    "Warung A = [[3|5]] = [[6|10]], Warung B = [[7|10]].",
    "Selisih = [[7|10]] - [[6|10]] = [[1|10]] bagian.",
  ],
  answers: ["1/10", "1 per 10"],
  displayAnswer: "[[1|10]] bagian",
  answerText: "satu per sepuluh bagian",
  explanationText:
    "Warung A tiga per lima sama dengan enam per sepuluh. Selisih tujuh per sepuluh dan enam per sepuluh adalah satu per sepuluh bagian.",
  visual: "Lentog",
}

export default createQuestionPage(question, 11)
