import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const Button = (props:{variant:'primary' | 'secondary'| 'text'; iconAfter?:ReactNode} &ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {className, children,variant, iconAfter, ...rest} =props
  return (
    <button className={twMerge(' h-11 px-6 rounded-xl border border-black uppercase inline-flex items-center gap-2 transition duration-500 relative group/button', 
    variant === 'primary' && 'bg-black text-white',
    variant === 'secondary' && 'hover:bg-black hover:text-white',
    variant === 'text' && "h-auto px-0 border-transparent after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-black hover:after:w-full relative after:transition-all after:duration-500 ",
    className)} {...rest}>
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  )
}

export default Button
