// testimonial.tsx component
import { paragraph, title } from '@/components/primitives'
import { Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react'
import React from 'react'
import NextLink from "next/link";
import { BranchesType } from '@/types/branchesType'
import { SocialMediaLink } from '@/components/links/socialMediaLink';

type BranchCardProps = {
    branches: BranchesType;
    className?: string;
}

const BranchCard = ({branches, className}:BranchCardProps ) => {
  return (
    <React.Fragment>
        <Card className={`max-w-lg h-auto mx-auto p-1.5 md:p-3 border border-default/30 bg-default/10 hover:dark:bg-default/20 hover:bg-default-100 ${className}`} radius="sm" isBlurred shadow="sm">
            <CardHeader>
                <p className={title({size:"md"})}>{branches.locationName}</p>
            </CardHeader>
            <CardBody>
                <p className={paragraph({size:"sm"})}>{branches.address}</p>

                <Link
                className={`hover:text-default-800 ${paragraph({
                  size: "md",
                })}`}
                as={NextLink}
                href={`mailto:${branches.email}`}
              >
                {branches.email}
              </Link>

            <Link
                className={`hover:text-default-800 ${paragraph({
                  size: "md",
                })}`}
                as={NextLink}
                href={`tel:${branches.mobile}`}
              >
                {branches.mobile}
              </Link>

            <Link
                className={`hover:text-default-800 ${paragraph({
                  size: "md",
                })}`}
                as={NextLink}
                href={`tel:${branches.telephone}`}
              >
                {branches.telephone}
              </Link>



            </CardBody>
            <CardFooter >
                <SocialMediaLink socialMediaLinks={branches.socialMedia}/>
            </CardFooter>
        </Card>
    </React.Fragment>
  )
}

export {BranchCard};