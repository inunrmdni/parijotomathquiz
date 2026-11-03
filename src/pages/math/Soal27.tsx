import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Pak Joko membuat 24 bungkus nasi jangkrik. Sebanyak [[1|3]] bagian dibawa ke pengajian dan [[1|4]] bagian diberikan kepada tetangga. Berapa bungkus nasi jangkrik yang tersisa?",
  known: [
    "Total = 24 bungkus",
    "Ke pengajian = [[1|3]] bagian",
    "Ke tetangga = [[1|4]] bagian.",
  ],
  asked: "Berapa bungkus nasi jangkrik yang tersisa?",
  solution: [
    "Pengajian = 8 bungkus, tetangga = 6 bungkus.",
    "Terpakai = 14 bungkus. Sisa = 24 - 14 = 10 bungkus.",
  ],
  answers: ["10", "10 bungkus"],
  displayAnswer: "10 bungkus",
  answerText: "sepuluh bungkus",
  explanationText:
    "Ke pengajian 8 bungkus dan ke tetangga 6 bungkus. Total terpakai 14 bungkus. Sisanya 10 bungkus.",
  visual: "Nasi jangkrik",
}

export default createQuestionPage(question, 27)
