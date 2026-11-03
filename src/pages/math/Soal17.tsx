import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Dari satu loyang jenang, Ibu menaruh [[2|8]] bagian di piring A dan [[3|8]] bagian di piring B. Berapa bagian loyang yang masih tersisa di loyang?",
  known: ["Piring A = [[2|8]] loyang", "Piring B = [[3|8]] loyang."],
  asked: "Berapa bagian loyang yang masih tersisa di loyang?",
  solution: [
    "Total dipindahkan = [[2|8]] + [[3|8]] = [[5|8]] loyang.",
    "Sisa di loyang = [[8|8]] - [[5|8]] = [[3|8]] loyang.",
  ],
  answers: ["3/8", "3 per 8", "⅜"],
  displayAnswer: "[[3|8]] loyang",
  answerText: "tiga per delapan loyang",
  explanationText:
    "Total yang dipindahkan adalah dua per delapan ditambah tiga per delapan, sama dengan lima per delapan. Sisanya tiga per delapan loyang.",
  visual: "Jenang",
}

export default createQuestionPage(question, 17)
