'use client'
import Button from "@/components/Button";
import { FC, useEffect, useState } from "react";
import {motion, useAnimate} from 'motion/react'

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#pictures",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {

  const [isOpen, setIsOpen] =useState(false);

  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();


  useEffect(()=>{
    if(isOpen){
      topLineAnimate([
        [
          topLineScope.current, {translateY: 4}
        ],
        [
          topLineScope.current, {rotate: 45} 
        ]
      ]),
      bottomLineAnimate([
        [
          bottomLineScope.current, {translateY: -4}
        ],
        [
          bottomLineScope.current, {rotate: -45} 
        ]
      ]);
      navAnimate(navScope.current, {height: '100%'}, {duration: 0.7})
    }else{
      topLineAnimate([
        [
          topLineScope.current, {rotate: 0}
        ],
        [
          topLineScope.current, {translateY: 0} 
        ]
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current, {rotate: 0}
        ],
        [
          bottomLineScope.current, {translateY: 0}
        ]
      ]);
      navAnimate(navScope.current, {height: 0})
    }
  }, [isOpen, topLineAnimate, topLineScope, bottomLineAnimate, bottomLineScope, navAnimate, navScope])  


  const handleClickMobileNav =(e:any)=>{
    e.preventDefault();
    setIsOpen(false)

    const url =new URL(e.currentTarget.href);
    const hash =url.hash

    const target =document.querySelector(hash);

    if(!target) return;
    target.scrollIntoView({behavior:'smooth'})

  }

  return <header>
    <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-black z-10" ref={navScope}>
      <nav className="mt-20 flex flex-col ">
        {navItems.map(({label, href})=>( 
          <a href={href}key={label} onClick={handleClickMobileNav} className="text-white border-t border-stone-800 last:border-t py-8 group/nav-item relative isolate">
            <div className="container flex items-center justify-between !max-w-full">
              <span className="text-2xl group-hover/nav-item:pl-4 transition-all duration-500">{label}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>

            <div className="absolute h-0 w-full bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10">
            </div>
            {/* once we hover the div would come up in the background */}
          </a>
        ))}
      </nav>
    </div>


    <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
      <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
        {/* Left */}
            <div>
              <a href="/"><span className="text-xl font-bold uppercase text-white">Snap&apos;s Photography</span></a>
            </div>
          </div>
      </div>
    </div>

    <div className="fixed top-0 left-0 w-full z-10">
      <div className="container !max-w-full">
        <div className="flex justify-end h-20 items-center">

        {/* Right */}
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-full flex justify-center items-center bg-stone-200" onClick={()=>setIsOpen(!isOpen)}>
              
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect ref={topLineScope} x="3" y="7" width="18" height="2" fill="currentColor"
                  style={{transformOrigin: '12px 8px', 
                    // transform:'translateY(-4px) rotate(45deg)'
                  }}
                  />
                  <motion.rect ref={bottomLineScope} x="3" y="15" width="18" height="2" fill="currentColor" 
                  style={{transformOrigin: '12px 16px'}}
                  />
              </svg>
            </div>

            <Button variant="primary" className="hidden md:inline-flex ">Contact Me</Button>

          </div>


        </div>
      </div>
    </div>
  
  </header>;
};

export default Header;
