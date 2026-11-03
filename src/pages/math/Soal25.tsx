import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Pak Slamet menyiapkan [[2;1|2]] loyang. Kemudian ia menambah [[3|4]] loyang lagi. Berapa loyang jenang yang ia miliki sekarang?",
  known: ["Awal = [[2;1|2]] loyang", "Ditambah = [[3|4]] loyang."],
  asked: "Berapa loyang jenang yang ia miliki sekarang?",
  solution: [
    "[[2;1|2]] + [[3|4]] = [[2;2|4]] + [[3|4]] = [[2;5|4]] = [[3;1|4]] loyang.",
  ],
  answers: ["3 1/4", "3 1 per 4", "3¼", "13/4", "13 per 4"],
  displayAnswer: "[[3;1|4]] loyang",
  answerText: "tiga satu per empat loyang",
  explanationText:
    "Dua satu per dua ditambah tiga per empat sama dengan tiga satu per empat loyang.",
  visual: "Jenang",
}

export default createQuestionPage(question, 25)
