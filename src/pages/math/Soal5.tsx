import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Warung lentog menyiapkan 36 porsi. Sebanyak [[2|3]] dari seluruh porsi sudah terjual sebelum siang. Berapa porsi lentog yang belum terjual?",
  known: ["Total porsi = 36 porsi", "Terjual = [[2|3]] bagian."],
  asked: "Berapa porsi lentog yang belum terjual?",
  solution: [
    "Bagian belum terjual = 1 - [[2|3]] = [[1|3]].",
    "Banyak porsi belum terjual = [[1|3]] × 36 = 12 porsi.",
  ],
  answers: ["12", "12 porsi"],
  displayAnswer: "12 porsi",
  answerText: "dua belas porsi",
  explanationText:
    "Bagian belum terjual adalah satu dikurangi dua per tiga, sama dengan satu per tiga. Satu per tiga dikali 36 sama dengan 12 porsi.",
  visual: "Lentog",
}

export default createQuestionPage(question, 5)
