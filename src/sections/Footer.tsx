'use client'
import Button from "@/components/Button";
import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const navItems =[
  {
    href:'#intro',
    label:'About'
  },
  {
    href:'#projects',
    label:'Projects'
  },
  {
    href:'#testimonials',
    label:'Testimonials'
  },
  {
    href:'#faqs',
    label:'Faqs'
  },
  {
    href:'#contact',
    label:'Contact'
  },
]

const Footer: FC = () => {

  const [footerScope, footerAnimate]=useAnimate()

  const inView =useInView(footerScope, {
    once:true
  });

  useEffect(()=>{
    new SplitType(footerScope.current, {
      types:'lines,words',
      tagName:'span'
    });

  },[footerScope])

  useEffect(()=>{
      if(inView){
        footerAnimate( footerScope.current.querySelectorAll('.word'), {
          transform:'translateY(0)'
        }, {
          duration:0.5,
          delay:stagger(0.2)
        })
      }
  }, [inView, footerScope, footerAnimate])


  const handleClickMobileNav =(e:any)=>{
    e.preventDefault();

    const url =new URL(e.currentTarget.href);
    const hash =url.hash

    const target =document.querySelector(hash);

    if(!target) return;
    target.scrollIntoView({behavior:'smooth'})

  }

  return <footer id="contact" className="bg-black text-white max-md:px-1">
    <div className="container">
      <div className="section">

        <div className="flex items-center gap-3"> 
          <div className="border border-green-400 opacity-30 p-1 rounded-full animate-pulse">
            <div className="size-3 rounded-full bg-green-400"></div>
          </div>
          <span className="uppercase">One spot available for next month</span>
        </div>

        <div className="grid md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <h2 className="text-5xl md:text-7xl lg:text-8xl mt-8 font-extralight" ref={footerScope}>Enough talk. Let&apos;s make something great together</h2>
            
            <Button variant="secondary" className="mt-8" 
              iconAfter={
                <div className="overflow-hidden size-6">
                  <div className="flex h-6 w-12 group-hover/button:-translate-x-1/2 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              }
              
            >info@enochoyedeji.com
            </Button>

          </div>
        
        <div className="md:col-span-1">
          <nav className="flex flex-col gap-8 mt-16 md:items-end md:mt-0">
            {navItems.map(({href, label})=>(
              <a href={href} key={label} onClick={handleClickMobileNav}>
                <Button variant="text" className="text-lg">{label}</Button>
              </a>
            ))}
          </nav>
        </div>

        </div>

      </div>
      <p className="py-16 text-white/30 text-sm">Copyright &copy; Enoch Oyedeji &bull; All rights reserved</p>
    </div>
  </footer>;
};

export default Footer;
