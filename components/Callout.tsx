import { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  type?: "info" | "normalise" | "safety"
  children: ReactNode
}

const styles: Record<NonNullable<Props["type"]>, string> = {
  info: "border-sky-300 bg-sky-50",
  normalise: "border-emerald-300 bg-emerald-50",
  safety: "border-amber-300 bg-amber-50",
}

export default function Callout({ type = "info", children }: Props) {
  return (
    <div className={clsx("rounded-2xl border p-4 leading-relaxed", styles[type])}>
      {children}
    </div>
  )
}
