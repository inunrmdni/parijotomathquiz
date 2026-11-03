import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Satu loyang jenang Kudus dipotong menjadi 8 bagian sama besar. Rani mengambil 3 potong dan Dimas mengambil 2 potong. Berapa bagian loyang jenang yang sudah diambil?",
  known: [
    "Loyang terbagi menjadi 8 bagian sama besar",
    "Rani mengambil 3 potong",
    "Dimas mengambil 2 potong",
  ],
  asked: "Berapa bagian loyang jenang yang sudah diambil?",
  solution: [
    "Potongan yang diambil = 3 + 2 = 5 potong dari total 8 bagian.",
    "Bagian loyang yang diambil = [[5|8]]",
  ],
  answers: ["5/8", "5 per 8", "⅝"],
  displayAnswer: "[[5|8]]",
  answerText: "lima per delapan",
  explanationText:
    "Potongan yang diambil adalah 3 ditambah 2, sama dengan 5 potong dari total 8 bagian. Bagian loyang yang diambil adalah lima per delapan.",
  visual: "Jenang",
}

export default createQuestionPage(question, 1)
