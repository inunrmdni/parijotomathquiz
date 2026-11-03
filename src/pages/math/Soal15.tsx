import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Setelah [[1|3]] dari seluruh jenang dibagikan kepada tetangga, tersisa 8 potong. Berapa potong jenang semula?",
  known: ["Jenang dibagikan = [[1|3]] bagian", "Sisa jenang = 8 potong."],
  asked: "Berapa potong jenang seluruhnya pada awalnya?",
  solution: [
    "[[2|3]] bagian = 8 potong. [[1|3]] bagian = 4 potong.",
    "Total awal ([[3|3]] bagian) = 3 × 4 = 12 potong.",
  ],
  answers: ["12", "12 potong"],
  displayAnswer: "12 potong",
  answerText: "dua belas potong",
  explanationText:
    "Dua per tiga bagian sama dengan 8 potong, sehingga satu per tiga sama dengan 4 potong. Total awal adalah 3 dikali 4, sama dengan 12 potong.",
  visual: "Jenang",
}

export default createQuestionPage(question, 15)
