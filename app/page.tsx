"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { FileCode } from "lucide-react"


export default function AboutPage() {
  const [iconVisible, setIconVisible] = useState(false);

  return (
    <main className="min-h-screen bg-grid-pattern">
      <div className="max-w-3xl mx-auto px-7 py-16">
        <Header currentPage="about" />

        <article>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-medium tracking-tight sm:text-4xl">About Me</h1>
            <motion.button
              onHoverStart={() => setIconVisible(true)}
              onHoverEnd={() => setIconVisible(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 transition-colors"
            >
              <span>Resume</span>
              <AnimatePresence>
                {iconVisible && (
                  <motion.div
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden flex items-center"
                  >
                    <FileCode size={16} className="shrink-0" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="mt-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-6">
                <div className="relative w-18 h-18 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/image.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl sm:text-2xl ">Hi, I am Harsh Anand.</p>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">Software Engineer based in Bengaluru, India, specializing in DevOps and backend development, with deep expertise in data flow optimization and scalable API architecture.</p>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl mb-6">Tools & Stacks I am familiar with</h2>

            
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}
