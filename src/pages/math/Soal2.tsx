import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Sebatang lontong untuk lentog diiris menjadi 6 irisan sama besar. Kakak memakan 2 irisan dan adik memakan 1 irisan. Berapa bagian lontong (dalam bentuk pecahan paling sederhana) yang masih tersisa?",
  known: [
    "Lontong terbagi menjadi 6 irisan sama besar",
    "Kakak memakan 2 irisan",
    "Adik memakan 1 irisan",
  ],
  asked:
    "Berapa bagian lontong (dalam bentuk pecahan paling sederhana) yang masih tersisa?",
  solution: [
    "Irisan dimakan = 2 + 1 = 3 irisan.",
    "Irisan tersisa = 6 - 3 = 3 irisan.",
    "Pecahan sisa = [[3|6]] = [[1|2]] lontong",
  ],
  answers: ["1/2", "1 per 2", "½", "3/6", "3 per 6"],
  displayAnswer: "[[1|2]]",
  answerText: "satu per dua",
  explanationText:
    "Irisan dimakan adalah 3 irisan. Irisan tersisa adalah 3 irisan. Pecahan sisa tiga per enam disederhanakan menjadi satu per dua lontong.",
  visual: "Lontong",
}

export default createQuestionPage(question, 2)
