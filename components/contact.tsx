import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section className="container py-24" id="contact">
      <div className="text-center space-y-4 mb-8 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Lets Design Together</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="max-w-md mx-auto flex gap-4 flex-col md:flex-row items-center px-4">
        <Input type="email" placeholder="Enter Your Email" />
        <Button className="bg-[#FF5C29] hover:bg-[#FF5C29]/90 w-full md:w-auto">
          Contact Me
        </Button>
      </div>
    </section>
  )
}
