import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t ">
      <div className="container py-16 ">
        <div className="flex flex-col items-center space-y-8">
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
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="#" className="text-sm">
              Home
            </Link>
            <Link href="#" className="text-sm">
              About Me
            </Link>
            <Link href="#" className="text-sm">
              Services
            </Link>
            <Link href="#" className="text-sm">
              Projects
            </Link>
            <Link href="#" className="text-sm">
              Testimonials
            </Link>
            <Link href="#" className="text-sm">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-[#FF5C29]">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#FF5C29]">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#FF5C29]">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#FF5C29]">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
