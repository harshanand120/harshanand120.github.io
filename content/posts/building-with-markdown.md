---
title: "Building a Blog with Markdown"
date: "2026-01-05"
description: "How I built this simple static blog using Next.js and Markdown files."
---

One of the best decisions I made when creating this blog was to use Markdown for content. It's simple, portable, and focuses on what matters most: the writing.

## Why Markdown?

Markdown has several advantages:

- **Simplicity** – Write without distractions
- **Portability** – Plain text files that work anywhere
- **Version control** – Easy to track changes with Git
- **No vendor lock-in** – Your content is always yours

## The Tech Stack

This blog is built with:

- **Next.js** – React framework with static site generation
- **Markdown** – Content stored as `.md` files
- **GitHub Pages** – Free static hosting
- **Tailwind CSS** – For styling

## How It Works

Each blog post is a Markdown file with frontmatter:

```markdown
---
title: "My Post Title"
date: "2026-01-01"
description: "A brief description"
---

Your content goes here...
```

The site reads these files at build time and generates static HTML pages. Simple and fast!

> "Simplicity is the ultimate sophistication." – Leonardo da Vinci

## Getting Started

If you want to create your own blog like this:

1. Clone the repository
2. Add your Markdown files to `content/posts/`
3. Customize the design
4. Deploy to GitHub Pages

Happy blogging!
