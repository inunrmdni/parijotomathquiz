import { createQuestionPage } from "../../features/quiz/QuestionPage"
import type { Question } from "./types"

export const question: Question = {
  prompt:
    "Sebuah toples keciput diberi 8 garis tanda dengan jarak sama dari dasar sampai penuh. Bu Aminah mengisi keciput sampai [[1|2]] toples. Sampai garis ke berapa isi keciput tersebut berhenti?",
  known: [
    "Toples memiliki 8 garis tanda dengan jarak sama",
    "Terisi [[1|2]] toples.",
  ],
  asked: "Sampai garis ke berapa isi keciput tersebut berhenti?",
  solution: [
    "[[1|2]] = [[1×4|2×4]] = [[4|8]].",
    "Isi keciput berhenti pada garis ke-4.",
  ],
  answers: ["4", "garis ke-4", "garis ke 4"],
  displayAnswer: "Garis ke-4",
  answerText: "garis ke empat",
  explanationText:
    "Satu per dua sama dengan empat per delapan. Isi keciput berhenti pada garis ke empat.",
  visual: "Keciput",
}

export default createQuestionPage(question, 9)
