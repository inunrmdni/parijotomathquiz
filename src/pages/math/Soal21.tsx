import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Satu loyang diisi jenang pandan sebanyak [[2|5]] bagian, lalu di loyang yang sama ditambahkan jenang cokelat sebanyak [[1|10]] bagian. Berapa bagian loyang yang masih kosong?",
  known: [
    "Jenang pandan = [[2|5]] bagian",
    "Jenang cokelat = [[1|10]] bagian.",
  ],
  asked: "Berapa bagian loyang yang masih kosong?",
  solution: [
    "Terisi = [[2|5]] + [[1|10]] = [[4|10]] + [[1|10]] = [[5|10]] = [[1|2]] loyang.",
    "Kosong = 1 - [[1|2]] = [[1|2]] loyang.",
  ],
  answers: ["1/2", "1 per 2", "½"],
  displayAnswer: "[[1|2]] loyang",
  answerText: "satu per dua loyang",
  explanationText:
    "Bagian terisi adalah dua per lima ditambah satu per sepuluh, sama dengan satu per dua. Bagian kosong adalah satu per dua loyang.",
  visual: "Jenang",
}

export default createQuestionPage(question, 21)
