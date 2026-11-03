import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Bu Lilis mengisi toples keciput secara bertahap. Pada hari ke-1 sampai ke-4 ia menambah [[1|8]] toples setiap hari. Mulai hari ke-5 ia menambah [[2|8]] toples setiap hari. Pada hari ke berapa toples tersebut penuh?",
  known: [
    "Hari 1-4 = +[[1|8]] per hari",
    "Mulai hari 5 = +[[2|8]] per hari",
    "Penuh = [[8|8]]",
  ],
  asked: "Pada hari ke berapa toples tersebut penuh?",
  solution: [
    "Akhir hari ke-4 = [[4|8]] toples.",
    "Hari ke-5 = [[6|8]] toples.",
    "Hari ke-6 = [[8|8]] toples (penuh).",
  ],
  answers: ["6", "hari ke-6", "hari ke 6"],
  displayAnswer: "Hari ke-6",
  answerText: "hari ke enam",
  explanationText:
    "Akhir hari ke empat terisi empat per delapan. Hari ke lima enam per delapan. Hari ke enam delapan per delapan atau penuh.",
  visual: "Keciput",
}

export default createQuestionPage(question, 29)
