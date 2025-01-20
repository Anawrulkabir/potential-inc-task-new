import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/mobile-nav'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full   bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 px-4">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={'./favicon.png'}
            alt="Mumair Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">
            M<span className="font-normal">umair</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium hover:text-[#FF5C29]">
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-[#FF5C29]"
          >
            About Me
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-[#FF5C29]"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-[#FF5C29]"
          >
            Projects
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-[#FF5C29]"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-[#FF5C29]"
          >
            Contact
          </Link>
          <Button className="bg-[#FF5C29] hover:bg-[#FF5C29]/90">
            Download CV
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}
