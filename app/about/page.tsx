import { Header } from "@/components/header"

export const metadata = {
  title: "About",
  description: "Learn more about me and my work.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Header currentPage="about" />

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-3xl font-semibold text-foreground mb-8">About Me</h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Hello! I'm a writer and developer passionate about technology, design, and sharing ideas through writing.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            This blog is where I share my thoughts, tutorials, and experiences. I believe in learning in public and
            documenting the journey.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">Connect</h2>

          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Twitter/X
              </a>
            </li>
            <li>
              <a href="mailto:your@email.com" className="underline hover:text-foreground transition-colors">
                Email
              </a>
            </li>
          </ul>
        </article>

        <footer className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
