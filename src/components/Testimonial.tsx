import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { HTMLAttributes, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import {usePresence, motion } from "motion/react";
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';

type Prop ={
    quote:string,
    name:string,
    image:string | StaticImport,
    role:string,
    company:string,
    imagePositionY:number,
    className?:string
}
const Testimonial = ({quote, name, role, company, image, imagePositionY, className, ...rest}:Prop & HTMLAttributes<HTMLDivElement>) => {

    // const [quoteScope, quoteAnimate]=useAnimate();
    // const [citeScope, citeAnimate]=useAnimate();

    const {scope:quoteScope, entranceAnimation:quoteEntranceAnimation, existAnimation:quoteExistAnimation} =useTextRevealAnimation()
    const {scope:citeScope, entranceAnimation:citeEntranceAnimation, existAnimation:citeExistAnimation} =useTextRevealAnimation()

    const [isPresent, safeToRemove] = usePresence()
    
    useEffect(()=>{
        if(isPresent){
            quoteEntranceAnimation().then(()=>{
                citeEntranceAnimation()
            });
        }else{
          Promise.all([
            quoteExistAnimation(), citeExistAnimation()]).then(()=>{
              safeToRemove()
            });
        }
    },[isPresent, quoteEntranceAnimation, citeEntranceAnimation, quoteExistAnimation, citeExistAnimation, safeToRemove])
  return (
     <div key={name} className={twMerge("grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center", className)} {...rest}>
               <div className=" aspect-square md:aspect-[9/16] md:col-span-2 relative">
                 <motion.div className='absolute h-full bg-stone-900'
                 initial={{width:'100%'}}
                 animate={{width:0}}
                 exit={{width:'100%'}}
                 transition={{duration:0.5}}
                 >

                 </motion.div>
                 <Image src={image} alt={name}  className="size-full object-cover" style={{objectPosition:`50% ${imagePositionY *100} `}} />
               </div>
   
               <blockquote className="md:col-span-3">
                 <div className="text-3xl md:text-5xl lg:text-6xl mt-8" ref={quoteScope}>
                   <span>&ldquo;</span>
                   {quote}
                   <span>&ldquo;</span>
                 </div>
   
                 <cite ref={citeScope} className="mt-4 md:mt-8 md:text-lg lg:text-xl not-italic block">{name}, {role} at {company}</cite>
               </blockquote>
    </div>
  )
}

export default Testimonial
