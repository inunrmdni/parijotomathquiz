import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Pak Dani memiliki [[7|8]] kg tepung ketan. Satu kali membuat adonan keciput memerlukan [[1|4]] kg tepung. Berapa kali Pak Dani dapat membuat adonan keciput tersebut?",
  known: [
    "Tepung tersedia = [[7|8]] kg",
    "Tepung per resep = [[1|4]] kg = [[2|8]] kg.",
  ],
  asked: "Berapa kali Pak Dani dapat membuat adonan keciput tersebut?",
  solution: [
    "[[7|8]] ÷ [[2|8]] = 7 ÷ 2 = 3 sisa 1.",
    "Pak Dani dapat membuat adonan keciput sebanyak 3 kali.",
  ],
  answers: ["3", "3 kali"],
  displayAnswer: "3 kali",
  answerText: "tiga kali",
  explanationText:
    "Tujuh per delapan dibagi dua per delapan sama dengan 7 dibagi 2, yaitu 3 sisa 1. Pak Dani dapat membuat adonan sebanyak 3 kali.",
  visual: "Keciput",
}

export default createQuestionPage(question, 30)
