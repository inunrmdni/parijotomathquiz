// src/features/quiz/soundUtils.ts

let currentAudio: HTMLAudioElement | null = null

export function playAudio(path: string) {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
    currentAudio = null
  }

  // Menyesuaikan path agar selalu valid baik di lokal maupun di Vercel deployment
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const audio = new Audio(cleanPath)
  currentAudio = audio

  audio.play().catch((err) => {
    console.warn(`Gagal memutar audio di path [${cleanPath}]:`, err.message)
  })

  audio.onended = () => {
    if (currentAudio === audio) {
      currentAudio = null
    }
  }
}
