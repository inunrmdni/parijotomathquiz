import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Ibu memiliki [[3|4]] liter kuah soto dan memakai [[1|2]] liter untuk acara keluarga. Setelah itu Ibu menambahkan [[1|8]] liter kaldu ke sisa kuah. Berapa liter kuah soto yang ada sekarang?",
  known: [
    "Mula-mula = [[3|4]] liter",
    "Dipakai = [[1|2]] liter",
    "Ditambah = [[1|8]] liter",
  ],
  asked: "Berapa liter kuah soto yang ada sekarang?",
  solution: [
    "[[3|4]] - [[1|2]] + [[1|8]] = [[6|8]] - [[4|8]] + [[1|8]] = [[3|8]] liter.",
  ],
  answers: ["3/8", "3 per 8", "⅜"],
  displayAnswer: "[[3|8]] liter",
  answerText: "tiga per delapan liter",
  explanationText:
    "Tiga per empat dikurangi satu per dua ditambah satu per delapan sama dengan tiga per delapan liter.",
  visual: "Soto",
}

export default createQuestionPage(question, 19)
