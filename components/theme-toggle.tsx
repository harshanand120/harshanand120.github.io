"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { flushSync } from "react-dom"
import { MoonIcon, SunMediumIcon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"

    if (!(document as any).startViewTransition) {
      setTheme(nextTheme)
      return
    }

    ;(document as any).startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme)
      })
    })
  }

  return (
    <div className="inline-flex items-center justify-center rounded-lg border border-border/60 bg-background/60 backdrop-blur-sm">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      >
        {resolvedTheme === "dark" ? (
          <SunMediumIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}