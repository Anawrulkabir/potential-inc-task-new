'use client'

import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const skills = [
  { name: 'UX Research & Strategy', value: 90 },
  { name: 'UI & Visual Design', value: 85 },
  { name: 'Interaction Design', value: 80 },
  { name: 'Prototyping', value: 95 },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [progress, setProgress] = useState<{ [key: string]: number }>(
    Object.fromEntries(skills.map((skill) => [skill.name, 0]))
  )

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        skills.forEach((skill) => {
          setProgress((prev) => ({ ...prev, [skill.name]: skill.value }))
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <section className="container py-20 md:py-24" id="about" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-me-image-r7GCzMOONDjqeMC6J41W3RsMbmRjJD.png"
            alt="About Me"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              About Me
            </h2>
            <p className="text-muted-foreground text-center md:text-left">
              As a passionate UI/UX designer, I specialize in creating intuitive
              digital experiences that bridge user needs with business goals.
              With years of experience in digital design, I bring a strategic
              approach to every project, ensuring that each solution is not just
              visually appealing but also functionally superior.
            </p>
          </div>
          <div className="space-y-4 ">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span>{progress[skill.name]}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress[skill.name]}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <Progress
                    value={progress[skill.name]}
                    className="h-2 bg-muted [&>div]:bg-[#FF5C29]"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
