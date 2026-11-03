import type { ReactNode } from "react"

type ActionButtonProps = {
  children: ReactNode
  onClick: () => void
  className?: string
  ariaLabel?: string
}

export function ActionButton({
  children,
  onClick,
  className = "",
  ariaLabel,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      className={`action-button ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
