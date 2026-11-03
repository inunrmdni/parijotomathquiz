import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Warung lentog menyiapkan 40 porsi setiap hari. Hari Senin terjual [[1|4]] bagian, hari Selasa [[3|10]] bagian, dan hari Rabu [[1|8]] bagian dari 40 porsi. Berapa total porsi lentog yang terjual selama tiga hari tersebut?",
  known: [
    "Kapasitas harian = 40 porsi",
    "Terjual Senin = [[1|4]]",
    "Terjual Selasa = [[3|10]]",
    "Terjual Rabu = [[1|8]] bagian",
  ],
  asked: "Berapa total porsi lentog yang terjual selama tiga hari tersebut?",
  solution: [
    "Senin = 10 porsi, Selasa = 12 porsi, Rabu = 5 porsi.",
    "Total terjual = 10 + 12 + 5 = 27 porsi.",
  ],
  answers: ["27", "27 porsi"],
  displayAnswer: "27 porsi",
  answerText: "dua puluh tujuh porsi",
  explanationText:
    "Senin terjual 10 porsi, Selasa 12 porsi, dan Rabu 5 porsi. Totalnya 27 porsi.",
  visual: "Lentog",
}

export default createQuestionPage(question, 28)
