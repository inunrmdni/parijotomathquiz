import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Panjang sebatang lontong 20 cm. Lontong diiris sehingga setiap irisan panjangnya [[1|5]] dari panjang lontong. Berapa cm panjang dari 3 irisan lontong tersebut?",
  known: [
    "Panjang lontong = 20 cm",
    "Panjang 1 irisan = [[1|5]] dari panjang lontong",
  ],
  asked: "Berapa cm panjang dari 3 irisan lontong tersebut?",
  solution: [
    "Panjang 1 irisan = [[1|5]] × 20 = 4 cm.",
    "Panjang 3 irisan = 3 × 4 cm = 12 cm.",
  ],
  answers: ["12", "12 cm"],
  displayAnswer: "12 cm",
  answerText: "dua belas sentimeter",
  explanationText:
    "Panjang satu irisan adalah satu per lima dikali 20, sama dengan 4 sentimeter. Panjang tiga irisan adalah 3 dikali 4, sama dengan 12 sentimeter.",
  visual: "Lontong",
}

export default createQuestionPage(question, 7)
