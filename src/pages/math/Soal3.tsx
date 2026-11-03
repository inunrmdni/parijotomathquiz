import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Dari 10 bungkus nasi jangkrik, 4 bungkus berisi telur dan 3 bungkus berisi tempe. Sisanya berisi ikan. Berapa bagian bungkus yang berisi ikan dalam bentuk pecahan paling sederhana?",
  known: [
    "Total nasi jangkrik = 10 bungkus",
    "Telur = 4 bungkus",
    "Tempe = 3 bungkus",
    "Sisanya ikan",
  ],
  asked:
    "Berapa bagian bungkus yang berisi ikan dalam bentuk pecahan paling sederhana?",
  solution: [
    "Bungkus ikan = 10 - (4 + 3) = 10 - 7 = 3 bungkus.",
    "Pecahan bungkus berisi ikan = [[3|10]]",
  ],
  answers: ["3/10", "3 per 10"],
  displayAnswer: "[[3|10]]",
  answerText: "tiga per sepuluh",
  explanationText:
    "Bungkus ikan adalah 10 dikurangi 4 ditambah 3, sama dengan 3 bungkus. Pecahan bungkus berisi ikan adalah tiga per sepuluh.",
  visual: "Nasi jangkrik",
}

export default createQuestionPage(question, 3)
