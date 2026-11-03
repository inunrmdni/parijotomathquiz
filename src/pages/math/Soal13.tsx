import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Tiga anak mendapat jenang dari loyang yang sama besar. Ani mendapat [[1|2]] loyang, Budi mendapat [[2|6]] loyang, dan Citra mendapat [[3|8]] loyang. Siapakah anak yang menerima jenang paling sedikit?",
  known: [
    "Ani = [[1|2]] loyang",
    "Budi = [[2|6]] loyang",
    "Citra = [[3|8]] loyang",
  ],
  asked: "Siapakah anak yang menerima jenang paling sedikit?",
  solution: [
    "Ani = [[12|24]], Budi = [[8|24]], Citra = [[9|24]].",
    "Karena [[8|24]] adalah yang terkecil, maka Budi menerima jenang paling sedikit.",
  ],
  answers: ["budi"],
  displayAnswer: "Budi",
  answerText: "Budi",
  explanationText:
    "Ani sama dengan dua belas per dua puluh empat, Budi delapan per dua puluh empat, dan Citra sembilan per dua puluh empat. Karena delapan per dua puluh empat paling kecil, Budi menerima paling sedikit.",
  visual: "Jenang",
}

export default createQuestionPage(question, 13)
