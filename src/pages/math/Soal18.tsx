import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Bu Dewi membeli [[1|2]] kg keciput kemarin dan [[1|4]] kg hari ini. Untuk sebuah acara ia memerlukan 1 kg. Berapa kg keciput lagi yang masih harus ia beli?",
  known: [
    "Membeli kemarin = [[1|2]] kg",
    "Hari ini = [[1|4]] kg",
    "Kebutuhan = 1 kg.",
  ],
  asked: "Berapa kg keciput lagi yang masih harus ia beli?",
  solution: [
    "Sudah dibeli = [[1|2]] + [[1|4]] = [[3|4]] kg.",
    "Kekurangan = [[4|4]] - [[3|4]] = [[1|4]] kg.",
  ],
  answers: ["1/4", "1 per 4", "¼"],
  displayAnswer: "[[1|4]] kg",
  answerText: "satu per empat kilogram",
  explanationText:
    "Yang sudah dibeli adalah satu per dua ditambah satu per empat, sama dengan tiga per empat kilogram. Kekurangannya satu per empat kilogram.",
  visual: "Keciput",
}

export default createQuestionPage(question, 18)
