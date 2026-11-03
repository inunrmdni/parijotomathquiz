import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Pak Joko membuat 24 bungkus nasi jangkrik. Sebanyak [[1|4]] dari seluruh bungkus dibawa ke pengajian. Berapa bungkus nasi jangkrik yang tidak dibawa ke pengajian?",
  known: [
    "Total bungkus = 24 bungkus",
    "Sebanyak [[1|4]] bagian dibawa ke pengajian.",
  ],
  asked: "Berapa bungkus nasi jangkrik yang tidak dibawa ke pengajian?",
  solution: [
    "Bagian tidak dibawa = 1 - [[1|4]] = [[3|4]].",
    "Banyak bungkus tidak dibawa = [[3|4]] × 24 = 18 bungkus.",
  ],
  answers: ["18", "18 bungkus"],
  displayAnswer: "18 bungkus",
  answerText: "delapan belas bungkus",
  explanationText:
    "Bagian yang tidak dibawa adalah satu dikurangi satu per empat, sama dengan tiga per empat. Tiga per empat dikali 24 sama dengan 18 bungkus.",
  visual: "Nasi jangkrik",
}

export default createQuestionPage(question, 4)
