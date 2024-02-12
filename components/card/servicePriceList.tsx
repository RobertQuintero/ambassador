"use client";
import { ServicePriceList } from "@/types/servicesPageType";
import {
  Chip,
  Modal,
  ModalContent,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { title } from "../primitives";

type ServicePriceListTableProps = {
  servicePriceList: ServicePriceList[];
};

const ServicePriceListTable = ({
  servicePriceList,
}: ServicePriceListTableProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedService, setSelectedService] =
    useState<ServicePriceList | null>(null);
  const handleOpen = (service: ServicePriceList) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <React.Fragment>
      <Table
        aria-label="Service Price List"
        selectionMode="single"
        shadow="sm"
        radius="sm"
        className=" "
        classNames={{
          base: "mx-auto max-w-xl ",
          th: `bg-background font-bold !w-full text-lg sm:text-xl `,
          td: `font-semibold text-base sm:text-lg `,
            loadingWrapper: "bg-red-300",
          wrapper: "bg-background/90",
        }}
      >
        <TableHeader>
          <TableColumn>Service</TableColumn>
          <TableColumn>Price</TableColumn>
        </TableHeader>
        <TableBody>
          {servicePriceList.map((service) => (
            <TableRow>
              <TableCell onClick={() => handleOpen(service)}>
                {service.promoPrice ? (
                  <div className="flex gap-2">
                    <p>{service.priceTitle}</p>
                    <Chip variant="flat" size="sm" color="danger">
                      Promo
                    </Chip>
                  </div>
                ) : (
                  <p> {service.priceTitle}</p>
                )}
              </TableCell>
              <TableCell className="">
                {/* if service has promoPrice, strike through the servicePrice but still show it the show the promoPrice */}
                {service.promoPrice ? (
                  <div className="flex gap-2">
                    <p className="flex gap-1  opacity-30 before:content-['_₱__'] after:self-end after:pb-0.5  after:text-sm after:content-['.00__']">
                      <s> {service.servicePrice}</s>
                    </p>{" "}
                    <p className="flex gap-1  before:content-['_₱__'] after:self-end after:pb-0.5  after:text-sm after:content-['.00__']">
                      {service.promoPrice}
                    </p>
                  </div>
                ) : (
                  <p className="flex gap-1  before:content-['_₱__'] after:self-end after:pb-0.5  after:text-sm after:content-['.00__']">
                    {" "}
                    {service.servicePrice}
                  </p>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedService && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="opaque"

          classNames={{
            body: "flex md:flex-row p-2 sm:p-4 lg:p-6",
            header: "p-0  ",
            closeButton:
              "z-30 bg-background/50 scale-125 rounded-md hover:bg-background/70 text-default-900 hover:text-default-900",
            base: "bg-background max-w-md shadow-none backdrop-none hideScroll",
          }}
        >
          <ModalContent>
            <div className="p-2 flex flex-col gap-2 md:gap-4">
              <p className={`!font-bold ${title({ size: "lg" })}`}>
                {selectedService.priceTitle}
              </p>
              <p >{selectedService.servicePrice}</p>
              <p>{selectedService.promoPrice}</p>
              <p>{selectedService.freeService}</p>
            </div>
          </ModalContent>
        </Modal>
      )}
    </React.Fragment>
  );
};
export { ServicePriceListTable };
