import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Dalam acara kampung disiapkan 15 mangkuk soto kecil. Sebanyak [[3|5]] dari seluruh mangkuk berisi soto ayam dan sisanya soto kerbau. Berapa bagian mangkuk yang berisi soto kerbau?",
  known: [
    "Total = 15 mangkuk",
    "Soto ayam = [[3|5]] bagian",
    "Sisanya soto kerbau.",
  ],
  asked: "Berapa bagian mangkuk yang berisi soto kerbau?",
  solution: ["Bagian soto kerbau = 1 - [[3|5]] = [[5|5]] - [[3|5]] = [[2|5]]."],
  answers: ["2/5", "2 per 5"],
  displayAnswer: "[[2|5]]",
  answerText: "dua per lima",
  explanationText:
    "Bagian soto kerbau adalah satu dikurangi tiga per lima, sama dengan dua per lima.",
  visual: "Soto",
}

export default createQuestionPage(question, 8)
