import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { Image, Tooltip } from "@nextui-org/react";
import { ProductsType } from "@/types/productsType";
type ProductCardProps = {
  product: ProductsType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <React.Fragment>
     <Tooltip key={product.image} content={product.brandName} placement="top">
      <div className="mx-4 w-28 md:w-40 xl:w-64" >
        <Image
          src={product.image}
          alt={product.brandName}
          radius="none"
          classNames={{img: "aspect-square object-contain object-center  grey-scale "}}
        />
      </div>
    </Tooltip>
    </React.Fragment>
  );
};

export { ProductCard };
