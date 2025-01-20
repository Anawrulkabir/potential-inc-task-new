'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    content:
      'Working with this team has been an absolute pleasure. Their professionalism, attention to detail, and dedication to delivering the best results are unmatched. I highly recommend their services!',
    image: './images/Ellipse%2011.png',
    name: 'Fahad Kabir',
    role: 'CEO',
  },
  {
    content:
      'I was amazed by the creativity and skill shown in every step of the process. The final product exceeded my expectations, and I’m thrilled with the outcome. Fantastic work!',
    image: './images/Ellipse%2010.png',
    name: 'Jane Smith',
    role: 'Designer',
  },
  {
    content:
      'The team delivered exactly what we needed, on time and within budget. Their ability to understand our needs and deliver high-quality work is truly commendable. I look forward to collaborating with them again!',
    image: './images/Ellipse%2011.png',
    name: 'Mike Johnson',
    role: 'Developer',
  },
]

export function Testimonials() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="container pb-12 " id="testimonials">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Testimonials</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <Carousel
        setApi={setApi}
        className="w-full max-w-3xl mx-auto"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="">
              <Card className="border-none shadow-none bg-muted/50">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* <Quote className="h-8 w-8 text-[#FF5C29]" /> */}
                    <div className="flex flex-col md:flex-row items-center space-x-4 ">
                      <Image
                        src={testimonial.image || '/placeholder.svg'}
                        alt={testimonial.name}
                        width={150}
                        height={150}
                        className="rounded-full hidden md:block"
                      />
                      <div className="flex flex-col space-y-2 items-start ">
                        <p className="text-md  max-w-md text-left text-muted-foreground">
                          <span className="font-black text-xl text-orange-500 italic mr-2">
                            ''
                          </span>
                          {testimonial.content}

                          <span className="font-black text-xl text-orange-500 italic ml-1">
                            ''
                          </span>
                        </p>
                        <div className="text-left hidden md:block">
                          <h4 className="font-normal text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground leading-none">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="text-left md:hidden flex items-center justify-center space-x-4 pt-4">
                          <div className="">
                            <Image
                              src={testimonial.image || '/placeholder.svg'}
                              alt={testimonial.name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <h4 className="font-normal text-md">
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-foreground leading-none text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-6 h-2 rounded-full transition-colors',
              current === index ? 'bg-[#FF5C29]' : 'bg-gray-300'
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
