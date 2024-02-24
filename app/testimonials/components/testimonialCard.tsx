// testimonial.tsx component
"use client";
import { paragraph, title } from '@/components/primitives'
import { Avatar, Card, CardBody, CardFooter, CardHeader, Link, ScrollShadow, Tooltip } from '@nextui-org/react'
import React from 'react'
import { TestimonialsType } from '@/types/testimonialsType'
import { DateComponent } from '@/components/time/date'
import NextLink from "next/link";

type TestimonialProps = {
    testimonial: TestimonialsType;
    className?: string;
    shadowClass?: string;
}

const TestimonialCard = ({testimonial, className,shadowClass}:TestimonialProps ) => {
  return (
    <React.Fragment>
        <Tooltip key={testimonial.fullName} content={<React.Fragment><Link  showAnchorIcon isExternal color='foreground' href={testimonial.url}>{testimonial.url}</Link> </React.Fragment>} placement="top">
        <Card className={`max-w-lg h-auto mx-auto p-1.5 md:p-3 border border-default/30 bg-default/10 hover:dark:bg-default/20 hover:bg-default-100 ${className}`} radius="sm" isBlurred shadow="sm" isPressable as={NextLink} href={testimonial.url}>
            <CardHeader>
                <Avatar src={testimonial.image} className='w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 mr-4' />
                <div className='flex flex-col'>
                    <p className={title({size:"md"})}>{testimonial.fullName}</p>
                </div>
            </CardHeader>
            <CardBody>
            <ScrollShadow className={`max-h-24 md:max-h-32 ${shadowClass}`} hideScrollBar>
                <blockquote className={paragraph({size:"sm"})}>{testimonial.testimonial}</blockquote>
            </ScrollShadow>
            </CardBody>
            <CardFooter className='flex-row-reverse'>
                    <DateComponent className={paragraph({size:"xs"})} Date={testimonial.date}/>
            </CardFooter>
        </Card>
        </Tooltip>
    </React.Fragment>
  )
}

export {TestimonialCard};