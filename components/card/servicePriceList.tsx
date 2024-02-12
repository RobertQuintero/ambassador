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
        shadow="none"
        radius="sm"
        className=" "
        classNames={{
          base: "mx-auto max-w-xl my-16 md:my-32 ",
          th: `bg-background font-bold !w-full  text-lg sm:text-xl `,
          td: `font-semibold text-sm sm:text-base md:text-lg `,
          wrapper: "bg-default-100/50",
        }}
      >
        <TableHeader>
          <TableColumn>Service</TableColumn>
          <TableColumn>Price</TableColumn>
        </TableHeader>
        <TableBody>
          {servicePriceList.map((service) => (
            <TableRow key={service.priceTitle}>
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
                  <div className="flex  gap-2">
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
          radius="sm"
          classNames={{
            body: "flex md:flex-row p-2 sm:p-4 lg:p-6",
            footer: "p-0 flex-col gap-2 md:gap-4",
            header: "p-0  ",
            closeButton:
              "z-30 bg-default-100/50 scale-125 rounded-md hover:bg-default/70 text-default-900 hover:text-default-900",
            base: "bg-background max-w-md shadow-none backdrop-none hideScroll",
          }}
        >
          <ModalContent>
            <div className="p-4 flex flex-col gap-2 md:gap-4">
              {selectedService.promoPrice ? (
                <Chip variant="flat" size="lg" color="danger">
                  Promo
                </Chip>
              ) : null}
                <p className={`${title({ size: "lg" })}`}> {selectedService.priceTitle}</p>
                {selectedService.promoPrice ? (
                  <div className="flex  gap-2">
                    <p className={`flex gap-1  opacity-30 before:content-['_₱__'] after:self-end after:pb-0.5  after:text-sm after:content-['.00__'] ${title({
                  size: "lg",
                })}`}>
                      <s> {selectedService.servicePrice}</s>
                    </p>{" "}
                    <p className={`flex gap-1  before:content-['_₱__'] after:self-end after:pb-0.5  after:text-sm after:content-['.00__'] ${title({
                  size: "lg",
                })}`}>
                      {selectedService.promoPrice}
                    </p>
                  </div>
                ) : (
                  <p className={`flex gap-1  before:content-['_₱__'] after:self-end after:mt-1  after:text-sm after:content-['.00__'] ${title({
                  size: "lg",
                })}`}>
                    {" "}
                    {selectedService.servicePrice}
                  </p>
                )}
              {selectedService.freeService ? (
                <div className="flex flex-wrap gap-2 before:content-['Comes_with_']">
                  {selectedService.freeService?.map((freeService) => (
                    <Chip
                      key={freeService}
                      variant="flat"
                      size="md"
                      color="default"
                    >
                      {freeService}
                    </Chip>
                  ))}
                </div>
              ) : null}
            </div>
          </ModalContent>
        </Modal>
      )}
    </React.Fragment>
  );
};
export { ServicePriceListTable };
