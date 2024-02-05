"use client"

import { cn } from '@nextui-org/react'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {
  profession:string[]
  className?: string; // Add className prop
  props?: any;
}

const AnimatedTextTypeWriter = ({className, props, profession}: Props) => {

    const [text]=useTypewriter({
        words:profession,
        loop:true,
        delaySpeed:2000
    })

  return (
    <span className={cn("",className)} {...props}>{text}</span>
  )
}

export  {AnimatedTextTypeWriter};