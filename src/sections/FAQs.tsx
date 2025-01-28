'use client'
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "What kind of photography do you specialize in?",
    answer:
      "I specialize in [e.g., portraits, events, weddings, or landscapes], but I'm always open to exploring new ideas that bring your vision to life",
  },
  {
    question: "How long does it take to get the final photos?",
    answer:
      "Typically, it takes about 1-2 weeks, but I'll always keep you updated throughout the process.",
  },
  {
    question: "Do you travel for shoots?",
    answer:
      "Yes! I travel locations to make different shoots.",
  },
  {
    question: "What if I've never done a photoshoot before?",
    answer:
      " Don't worry! I'll guide you through every step to make sure you feel comfortable and confident in front of the camera",
  },
];

const FAQs: FC = () => {

  const [selectedIndex, setSelectedIndex]= useState<number | null>(null)

  return <section id="faqs" className="section">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>

      <div className="mt-10 md:mt-16 lg:mt-20">
        {faqs.map(({question, answer}, index)=>(
          <div key={question} className="border-t border-stone-400 border-dotted last:border-b py-6 md:py-8 relative group/faq px-2"
          onClick={()=>{
            if(index === selectedIndex){
              setSelectedIndex(null)
            }else{
              setSelectedIndex(index)
            }
            // on click i want to set the selectedIndex to the index, and if on clicking the selectedIndex === index, we make the selectedIndex null
            // what this does is on clicking we set the index, and id the index is equal to the selectedIndex, we then display the answer, and if
            // on click the selectedIndex is equal to the index we make it null, there by removing the answer
          }
          }
          >
            <div className={twMerge("absolute bottom-0 left-0 h-0 w-full bg-stone-300 transition-all duration-500 group-hover/faq:h-full -z-10", index === selectedIndex && 'h-full')}></div>
            
            <div className={twMerge("flex justify-between items-center gap-4 transition-all duration-500 group-hover/faq:lg:pl-8")}>
              <div className="text-2xl md:text-3xl">{question}</div>
              <div className={twMerge("inline-flex justify-center items-center size-11 border bg-stone-200 border-stone-400 rounded-full cursor-pointer shrink-0 transition duration-300", index === selectedIndex && 'rotate-45')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>

            </div>

            <AnimatePresence>
              {index === selectedIndex && 
              <motion.div 
              className={twMerge("overflow-hidden", )}
              initial={{height:0}}
              animate={{height:'auto'}}
              exit={{height:0}}
              transition={{duration:.7, ease:'easeOut'}}
              >
                <p className="text-xl mt-4">{answer}</p>
              </motion.div>
              }
            </AnimatePresence>
          </div>
        ))}
      </div>
      
    </div>
  </section>;
};

export default FAQs;
