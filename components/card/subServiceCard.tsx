import React from "react";
import {
  Card,
  Image,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { SubServices } from "@/types/servicesPageType";
import { title } from "../primitives";

type SubServiceCardProps = {
  subServices: SubServices;
};

const SubServiceCard = ({ subServices }: SubServiceCardProps) => {

  return (
    <React.Fragment>
      <motion.div whileHover={{scale:1.1}} className="max-w-sm">
        <Card className="flex-row items-center pl-1 md:pl-2  pr-3 md:pr-4 bg-default-100/50 " radius="sm">
          <Image
            src={subServices.subServiceImage}
            alt={subServices.subServiceTitle}
            width={1000}
            height={1000}
            radius="sm"
            className="dark:invert w-14 h-14 mr-2"
          />
          <h3 className={title({size:"lg"})}>
            {subServices.subServiceTitle}
            </h3>
        </Card>
      </motion.div>
    </React.Fragment>
  );
};

export { SubServiceCard };
