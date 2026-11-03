import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Dua lontong berukuran sama. Rina memakan [[2|3]] bagian dari lontong pertama, sedangkan Dimas memakan [[3|4]] bagian dari lontong kedua. Berapa bagian selisih lontong yang dimakan oleh Dimas dan Rina?",
  known: ["Rina memakan [[2|3]] lontong", "Dimas memakan [[3|4]] lontong."],
  asked: "Berapa bagian selisih lontong yang dimakan oleh Dimas dan Rina?",
  solution: [
    "[[3|4]] = [[9|12]]",
    "[[2|3]] = [[8|12]]",
    "Selisih = [[9|12]] - [[8|12]] = [[1|12]] lontong.",
  ],
  answers: ["1/12", "1 per 12"],
  displayAnswer: "[[1|12]] lontong",
  answerText: "satu per dua belas lontong",
  explanationText:
    "Tiga per empat sama dengan sembilan per dua belas. Dua per tiga sama dengan delapan per dua belas. Selisihnya satu per dua belas lontong.",
  visual: "Lontong",
}

export default createQuestionPage(question, 10)
