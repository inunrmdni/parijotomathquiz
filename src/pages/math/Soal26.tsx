import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Pak Hasan memiliki 3 toples. Setiap toples berisi [[3|4]] kg keciput. Ia ingin memindahkan semuanya ke kantong berkapasitas 1 kg. Berapa kantong yang terisi penuh oleh seluruh keciput tersebut?",
  known: [
    "3 toples keciput",
    "Masing-masing berisi [[3|4]] kg",
    "Kantong berkapasitas 1 kg.",
  ],
  asked: "Berapa kantong yang terisi penuh oleh seluruh keciput tersebut?",
  solution: [
    "Total keciput = 3 × [[3|4]] = [[9|4]] kg = [[2;1|4]] kg.",
    "Banyak kantong terisi penuh = 2 kantong.",
  ],
  answers: ["2", "2 kantong"],
  displayAnswer: "2 kantong",
  answerText: "dua kantong",
  explanationText:
    "Total keciput adalah 3 dikali tiga per empat, sama dengan dua satu per empat kilogram. Banyak kantong yang terisi penuh adalah 2 kantong.",
  visual: "Keciput",
}

export default createQuestionPage(question, 26)
