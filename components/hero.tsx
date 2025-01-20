import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="container   flex items-center justify-center "
      id="home"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center min-h-screen md:min-h-full md:h-[calc(100vh-4rem)] xl:h-full">
        <div className="space-y-8 text-center md:text-left ">
          <div className="max-w-lg">
            <h2 className="text-xl md:mb-3">Hi I am</h2>
            <h1 className="text-xl md:text-xl lg:text-2xl font-medium leading-none text-[#FF5C29] tracking-wider mb-3">
              Muhammad Umair
            </h1>
            <h1 className="font-bold text-[5rem]  leading-none">UI & UX</h1>
            <h1 className="font-bold text-[5rem]  leading-none text-right mb-6">
              Designer
            </h1>
            <p className="text-muted-foreground mx-auto md:mx-0">
              Transforming complex challenges into intuitive digital
              experiences. Specializing in user-centered design solutions that
              drive engagement and deliver measurable results.
            </p>
          </div>
          <Button className="bg-[#FF5C29] hover:bg-[#FF5C29]/90 w-full md:w-1/3 ">
            Hire Me
          </Button>
        </div>
        <div className=" order-first md:order-last flex md:items-end items-center justify-center flex-col  ">
          <div className="">
            <Image
              src="./images/hero-image.png"
              alt="Profile Image"
              height={400}
              width={400}
              // fill
              className="hidden md:block"
            />
            <Image
              src="./images/hero-image.png"
              alt="Profile Image"
              height={300}
              width={300}
              // fill
              className="md:hidden "
            />
          </div>
          <div className="  flex space-x-4 bg-background/95 backdrop-blur p-4   w-full justify-center md:pl-24">
            <Link href="#" className="hover:text-[#FF5C29]">
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-[#FF5C29]">
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-[#FF5C29]">
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-[#FF5C29]">
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
