import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Dalam acara kampung, Bu Siti menyiapkan 2 panci soto sama besar. Panci pertama habis [[3|4]] bagian dan panci kedua habis [[1|2]] bagian. Berapa panci soto yang masih tersisa secara keseluruhan?",
  known: [
    "Total soto = 2 panci",
    "Panci pertama habis [[3|4]]",
    "Panci kedua habis [[1|2]]",
  ],
  asked: "Berapa panci soto yang masih tersisa secara keseluruhan?",
  solution: [
    "Sisa panci 1 = [[1|4]] panci, sisa panci 2 = [[1|2]] = [[2|4]] panci.",
    "Total sisa = [[1|4]] + [[2|4]] = [[3|4]] panci.",
  ],
  answers: ["3/4", "3 per 4", "¾"],
  displayAnswer: "[[3|4]] panci",
  answerText: "tiga per empat panci",
  explanationText:
    "Sisa panci pertama satu per empat dan sisa panci kedua dua per empat. Total sisanya tiga per empat panci.",
  visual: "Soto",
}

export default createQuestionPage(question, 22)
