import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon01-cs0vRbwbyLjAgvZ6MM2uAjQhYTvReF.png",
      title: "UI/UX",
      description:
        "Creating intuitive and engaging user interfaces that delight users while meeting business objectives through research-driven design processes.",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon02-7RTZXCqiM8TTemCsoJBJtXw0Sh88xb.png",
      title: "Web Design",
      description:
        "Crafting responsive and modern websites that combine aesthetic appeal with functional excellence, ensuring seamless user experiences across all devices.",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon03-yTdfWdyBLqu9uOpCHTGfYVBrAp8IYz.png",
      title: "App Design",
      description:
        "Developing mobile-first applications with intuitive navigation and engaging interfaces that provide exceptional user experiences on all platforms.",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon04-9bHqThBPI2qGG4KoEHDnl1pmqPZ2TR.png",
      title: "Graphic Design",
      description:
        "Creating visually compelling designs that communicate your brand's message effectively while maintaining consistency across all digital touchpoints.",
    },
  ]

  return (
    <section className="container py-12 md:py-24" id="services">
      <div className="text-center space-y-4 mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">Services</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto px-4 md:px-0">
          Specialized design services tailored to elevate your digital presence and enhance user engagement through
          thoughtful, user-centered design solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
        {services.map((service, index) => (
          <Card key={index} className="bg-muted/50">
            <CardContent className="p-6 space-y-4">
              <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={32} height={32} />
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

