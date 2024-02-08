// testimonial.tsx component
import { paragraph, title } from '@/components/primitives'
import { Avatar, Card, CardBody, CardFooter, CardHeader, ScrollShadow } from '@nextui-org/react'
import React from 'react'
import { TestimonialsType } from '@/types/testimonialsType'
import { DateComponent } from '@/components/time/date'
import NextLink from "next/link";

type testimonialProps = {
    testimonial: TestimonialsType;
    className?: string;
}

const TestimonialCard = ({testimonial, className}:testimonialProps ) => {
  return (
    <React.Fragment>
        <Card className={`max-w-lg h-auto mx-auto p-1.5 md:p-3 border border-default/30 bg-default/10 hover:dark:bg-default/20 hover:bg-default-100 ${className}`} radius="sm" isBlurred shadow="sm" isPressable as={NextLink} href={testimonial.url}>
            <CardHeader>
                <Avatar src={testimonial.image} className='w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 mr-4' />
                <div className='flex flex-col'>
                    <p className={title({size:"md"})}>{testimonial.fullName}</p>
                </div>
            </CardHeader>
            <CardBody>
            <ScrollShadow className='max-h-24 md:max-h-32' hideScrollBar>
                <blockquote className={paragraph({size:"sm"})}>{testimonial.testimonial}</blockquote>
            </ScrollShadow>
            </CardBody>
            <CardFooter className='flex-row-reverse'>
                    <DateComponent className={paragraph({size:"xs"})} Date={testimonial.date}/>
            </CardFooter>
        </Card>
    </React.Fragment>
  )
}

export {TestimonialCard};