import { TestimonialCard } from "@/app/testimonials/components/testimonialCard";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { title } from "@/components/primitives";
import React from "react";
import { AnimatedParallaxCard } from "@/components/animation/animatedCarousel";
import { ProductsType } from "@/types/productsType";
import { ProductCard } from "@/components/card/productCard";

type ProductsListProps = {
  products: ProductsType[];
};

const ProductsList = ({
  products,
}: ProductsListProps) => {
  return (
    <div className="mt-14 sm:mt-16 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-64">
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center "
        direction="up"
      >
        <h2
          className={`!font-bold text-default-900 text-center my-4 md:my-6 ${title(
            { size: "xxl" }
          )}`}
        >

        </h2>
      </AnimatedDivLeftRightUpDown>
      <AnimatedDivLeftRightUpDown direction="left" className="mx-auto w-fit">
        <AnimatedParallaxCard baseVelocity={2} className="max-w-7xl">
          {products.map((product, index) => (
            <div key={index} className="min-w-max min-h-full flex items-center">
              <ProductCard product={product} />
            </div>
          ))}
        </AnimatedParallaxCard>
        <AnimatedParallaxCard baseVelocity={-2} className="max-w-7xl ">
          {products.map((product, index) => (
            <div key={index} className="min-w-max min-h-full flex items-center">
              <ProductCard product={product} />
            </div>
          ))}
        </AnimatedParallaxCard>
      </AnimatedDivLeftRightUpDown>
    </div>
  );
};

export { ProductsList };
