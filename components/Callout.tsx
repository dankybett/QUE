import { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  type?: "info" | "normalise" | "safety"
  children: ReactNode
}

const styles: Record<NonNullable<Props["type"]>, { container: string; icon: string; iconBg: string }> = {
  info: {
    container: "border-blue-200 bg-blue-50 text-blue-900",
    icon: "text-blue-600",
    iconBg: "bg-blue-100"
  },
  normalise: {
    container: "border-green-200 bg-green-50 text-green-900", 
    icon: "text-green-600",
    iconBg: "bg-green-100"
  },
  safety: {
    container: "border-amber-200 bg-amber-50 text-amber-900",
    icon: "text-amber-600", 
    iconBg: "bg-amber-100"
  },
}

const icons: Record<NonNullable<Props["type"]>, ReactNode> = {
  info: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  normalise: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  safety: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  )
}

export default function Callout({ type = "info", children }: Props) {
  const style = styles[type]
  
  return (
    <div className={clsx("rounded-lg border-l-4 p-5 my-6 shadow-sm", style.container)}>
      <div className="flex items-start gap-3">
        <div className={clsx("flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center", style.iconBg)}>
          <span className={clsx(style.icon)}>
            {icons[type]}
          </span>
        </div>
        <div className="flex-1 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
