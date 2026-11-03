import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Tiga lontong sama besar dibagi rata kepada 4 anak. Berapa bagian lontong yang diterima oleh setiap anak?",
  known: ["Jumlah lontong = 3 buah sama besar", "Jumlah anak = 4 orang."],
  asked: "Berapa bagian lontong yang diterima oleh setiap anak?",
  solution: ["Bagian tiap anak = 3 ÷ 4 = [[3|4]] lontong."],
  answers: ["3/4", "3 per 4", "¾"],
  displayAnswer: "[[3|4]] lontong",
  answerText: "tiga per empat lontong",
  explanationText:
    "Bagian tiap anak adalah 3 dibagi 4, sama dengan tiga per empat lontong.",
  visual: "Lontong",
}

export default createQuestionPage(question, 16)
