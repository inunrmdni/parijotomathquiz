import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Untuk adonan keciput, Pak Hasan memakai [[1|3]] kg tepung ketan dan [[1|6]] kg wijen. Jika wadahnya berkapasitas 1 kg, berapa kg lagi bahan yang masih muat ditambahkan?",
  known: [
    "Tepung ketan = [[1|3]] kg",
    "Wijen = [[1|6]] kg",
    "Kapasitas wadah = 1 kg.",
  ],
  asked: "Berapa kg lagi bahan yang masih muat ditambahkan?",
  solution: [
    "Total bahan = [[1|3]] + [[1|6]] = [[3|6]] = [[1|2]] kg.",
    "Sisa kapasitas = 1 - [[1|2]] = [[1|2]] kg.",
  ],
  answers: ["1/2", "1 per 2", "½"],
  displayAnswer: "[[1|2]] kg",
  answerText: "satu per dua kilogram",
  explanationText:
    "Total bahan satu per tiga ditambah satu per enam sama dengan satu per dua kilogram. Sisa kapasitas adalah satu per dua kilogram.",
  visual: "Keciput",
}

export default createQuestionPage(question, 23)
