import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Satu loyang jenang dipotong menjadi 12 bagian sama besar. Rafi mengambil [[1|4]] loyang dan Salsa mengambil [[1|6]] loyang. Berapa bagian loyang yang masih tersisa?",
  known: [
    "Loyang dipotong 12 bagian",
    "Rafi mengambil [[1|4]] loyang",
    "Salsa mengambil [[1|6]] loyang.",
  ],
  asked: "Berapa bagian loyang jenang yang masih tersisa?",
  solution: [
    "Bagian diambil = [[1|4]] + [[1|6]] = [[3|12]] + [[2|12]] = [[5|12]] loyang.",
    "Bagian tersisa = 1 - [[5|12]] = [[12|12]] - [[5|12]] = [[7|12]] loyang.",
  ],
  answers: ["7/12", "7 per 12"],
  displayAnswer: "[[7|12]] loyang",
  answerText: "tujuh per dua belas loyang",
  explanationText:
    "Bagian yang diambil adalah satu per empat ditambah satu per enam, sama dengan lima per dua belas. Bagian tersisa adalah satu dikurangi lima per dua belas, sama dengan tujuh per dua belas loyang.",
  visual: "Jenang",
}

export default createQuestionPage(question, 6)
