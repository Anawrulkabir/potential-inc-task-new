'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type ProjectType = {
  image: string
  category: string
  title: string
  description: string
}

const categories = [
  'All',
  'UI/UX',
  'Web Design',
  'App Design',
  'Graphic Design',
]

const projects: ProjectType[] = [
  {
    image: './images/project1.png',
    category: 'Web Design',
    title: 'AirCalling Landing Page Design',
    description:
      'A modern landing page for a virtual meeting platform focusing on seamless communication and user engagement.',
  },
  {
    image: './images/project2.png',
    category: 'Web Design',
    title: 'Business Landing Page Design',
    description:
      'Analytics dashboard design with intuitive data visualization and user-friendly interface for business metrics.',
  },
  {
    image: './images/project3.png',
    category: 'Web Design',
    title: 'Ecom Web Page Design',
    description:
      'Clean and modern e-commerce platform design focusing on product presentation and seamless shopping experience.',
  },
  {
    image: './images/project2.png',
    category: 'UI/UX',
    title: 'Mobile App UI Design',
    description:
      'A sleek and intuitive mobile app interface designed for optimal user experience and engagement.',
  },
  {
    image: './images/project3.png',
    category: 'UI/UX',
    title: 'Dashboard UI Design',
    description:
      'A comprehensive dashboard UI design with clear data visualization and user-friendly navigation.',
  },
  {
    image: './images/project1.png',
    category: 'UI/UX',
    title: 'E-commerce App UI Design',
    description:
      'An engaging and user-friendly e-commerce app interface focusing on seamless shopping experience.',
  },
  {
    image: './images/project2.png',
    category: 'App Design',
    title: 'Fitness App Design',
    description:
      'A modern and clean design for a fitness app, focusing on user engagement and ease of use.',
  },
  {
    image: './images/project1.png',
    category: 'App Design',
    title: 'Travel App Design',
    description:
      'A visually appealing travel app design with intuitive navigation and user-friendly interface.',
  },
  {
    image: './images/project3.png',
    category: 'App Design',
    title: 'Finance App Design',
    description:
      'A sleek and modern design for a finance app, focusing on data visualization and user experience.',
  },
  {
    image: './images/project1.png',
    category: 'Graphic Design',
    title: 'Brand Identity Design',
    description:
      'A comprehensive brand identity design, including logo, typography, and color scheme.',
  },
  {
    image: './images/project3.png',
    category: 'Graphic Design',
    title: 'Marketing Materials Design',
    description:
      'A set of visually appealing marketing materials, including brochures, flyers, and posters.',
  },
  {
    image: './images/project2.png',
    category: 'Graphic Design',
    title: 'Social Media Graphics Design',
    description:
      'A collection of engaging social media graphics designed to boost online presence and engagement.',
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Web Design')

  return (
    <section className="container py-24" id="projects">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">My Projects</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Showcasing a collection of carefully crafted digital experiences that
          demonstrate my commitment to user-centered design and aesthetic
          excellence.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'px-6 py-2 rounded-full border transition-colors',
              activeCategory === category
                ? 'bg-[#FF5C29] text-white border-[#FF5C29]'
                : 'border-gray-200 hover:border-[#FF5C29] hover:text-[#FF5C29]'
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter(
            (project) =>
              activeCategory === 'All' || project.category === activeCategory
          )
          .map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-[#FFF6F2]"
            >
              <div className="aspect-[4/3] p-4">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#FF5C29] text-sm">{project.category}</p>
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="text-muted-foreground mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
