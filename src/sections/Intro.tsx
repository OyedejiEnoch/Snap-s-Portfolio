'use client'
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  
  const [scope, animate]=useAnimate()
  const inView =useInView(scope, {
    once:true
  });


  useEffect(()=>{
      new SplitType(scope.current.querySelector('h2'), {
           types:'lines,words',
           tagName:'span'
     });
 
  }, [scope])

  useEffect(()=>{
    if(inView){
      animate(scope.current.querySelectorAll('.word'), {
        transform:'translateY(0)'
      }, {
        duration:0.5,
      delay:stagger(0.2)
      })
    }
  }, [inView, animate, scope])

  return <section id="intro" className="py-24 mt-12 md:py-32 md:mt-16" ref={scope}>
    <div className="container">
      <h2 className="text-5xl md:text-7xl lg:text-7xl ">Taking beautiful pictures dedicated to capturing moments that tell stories blending creativity with emotion in every shot. Let&apos;s create something beautiful together!</h2>
    {/* Taking beautiful pictures that truly captivates */}
    </div>
  </section>;
};

export default Intro;
