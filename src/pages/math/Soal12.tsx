import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Dari 18 irisan lontong, 12 irisan sudah dimakan. Berapa bagian lontong yang sudah dimakan dalam bentuk pecahan paling sederhana?",
  known: ["Total irisan = 18", "Irisan dimakan = 12"],
  asked:
    "Berapa bagian lontong yang sudah dimakan dalam bentuk pecahan paling sederhana?",
  solution: [
    "Pecahan dimakan = [[12|18]].",
    "Sederhanakan: [[12÷6|18÷6]] = [[2|3]] bagian.",
  ],
  answers: ["2/3", "2 per 3", "⅔"],
  displayAnswer: "[[2|3]] bagian",
  answerText: "dua per tiga bagian",
  explanationText:
    "Pecahan yang dimakan adalah dua belas per delapan belas. Disederhanakan dengan membagi pembilang dan penyebut dengan 6, hasilnya dua per tiga bagian.",
  visual: "Lontong",
}

export default createQuestionPage(question, 12)
