import { AnimatedDivLeftRightUpDown } from '@/components/animation/animatedDiv';
import { paragraph, title } from '@/components/primitives';
import { HomeType } from '@/types/homeType';
import React from 'react'

type HeaderHomeProps = {
    home: HomeType;
    };

const HeaderHome = ({home}:HeaderHomeProps) => {
  return (
    <React.Fragment>
        <AnimatedDivLeftRightUpDown
          direction="up"
          className="flex flex-col justify-center items-center "
        >
          <h1
            className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl   ${title(
              { size: "xxxl" }
            )}`}
          >
            {home.title}
          </h1>
          <p
            className={`!text-default-700 text-center mx-auto max-w-3xl !font-bold ${paragraph(
              { size: "md" }
            )}`}
          >
            {home.introduction}
          </p>
        </AnimatedDivLeftRightUpDown>
    </React.Fragment>
  )
}

export {HeaderHome};