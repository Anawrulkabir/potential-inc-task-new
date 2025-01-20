import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-12">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>

      <div className="bg-[#333333] py-3 flex justify-center">
        <div className="container text-center text-white text-sm">
          © 2023 <span className="text-[#FF5C29]">Mumair</span> All Rights
          Reserved, Inc.
        </div>
      </div>
    </div>
  )
}
