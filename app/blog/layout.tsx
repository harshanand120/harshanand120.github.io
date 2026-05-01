import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Blogs",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
