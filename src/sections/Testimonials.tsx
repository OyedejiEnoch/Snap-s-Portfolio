'use client'
import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/imagePic20.jpg";
import image2 from "@/assets/images/imagePic22.jpg";
import image3 from "@/assets/images/imagePic3.jpg";
import { useScroll,motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";


/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Working with Enoch Snap's was an absolute pleasure! They captured every detail perfectly and made the whole process so easy..",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "The photos exceeded my expectations! Every shot was stunning and full of life. I can't recommend them enough.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "From start to finish, it was a seamless experience. The final pictures were absolutely breathtaking!",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {

  const titleRef =useRef(null);

  const [testimonialIndex, setTestimonialIndex] =useState(0)

  const {scrollYProgress} =useScroll({
    target:titleRef,
    offset:['start end', 'end start']
  })

  const transformTop =useTransform(scrollYProgress, [0,1], ['0%', '15%'])
  // using useScroll hook to get the scrollYProgress value, we then use useTransform to transform the scrollYProgress value saying 
  // as the scrollYProgress increases from 0-1, the transformTop value increases from 0% to -15%, we then add it to the style of the element we want to animate, so as we scroll, the element is automatically updated
  const transformBottom =useTransform(scrollYProgress, [0,1], ['0%', '-15%'])

  const handleClickPrev =()=>{
    setTestimonialIndex(curr=>{
      if(curr === 0){
        return testimonials.length - 1
      }
      return curr -1
    })
    // setTestimonialIndex((prev)=>(prev + 1) % testimonials.length)
  }

  const handleClickNext =()=>{
    setTestimonialIndex(curr=>{
      if(curr === testimonials.length - 1){
        return 0
      }
      return curr + 1
    })
    // setTestimonialIndex((prev)=>(prev + 1) % testimonials.length
  }

  return <section id="testimonials" className="section">
    <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden" ref={titleRef}>
      <motion.span className="whitespace-nowrap" style={{
        x:transformTop
      }}>Some nice words from my past clients</motion.span>
      <motion.span className="whitespace-nowrap self-end text-red-orange-500"  style={{
        x:transformBottom
      }}>Some nice words from my past clients</motion.span>
    </h2>

    <div className="container">
      <div className="mt-20">
        {testimonials.map(({name,company, role, quote, image, imagePositionY}, index)=>(
          index === testimonialIndex &&
          <AnimatePresence mode="wait" initial={false}>
            <Testimonial key={name} name={name} company={company} role={role} quote={quote} image={image} imagePositionY={imagePositionY} />
          </AnimatePresence>
        ))}
      </div>

        <div className="flex items-center gap-4 mt-6 lg:mt-10">
          <button onClick={handleClickPrev} className="border border-stone-400 hover:bg-red-orange-500 hover:border-red-orange-500 hover:text-white transition duration-300 size-11 inline-flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          
          <button onClick={handleClickNext} className="border border-stone-400 hover:bg-red-orange-500 hover:border-red-orange-500 hover:text-white transition duration-300 size-11 inline-flex items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      <div>

      </div>
    </div>
  </section>;
};

export default Testimonials;
