//shoWMoreButton.tsx component
"use client";
import { Atom, useAtom } from 'jotai';
import { Button, CircularProgress } from '@nextui-org/react';
import React, { useState } from 'react';
import { showMoreCountAtom } from '../searchAtoms';


type ShowMoreButtonProps = {
  filteredAtom: Atom<any>;
};

const ShowMoreButton = ({ filteredAtom }: ShowMoreButtonProps)  => {
  const [showMoreCount, setShowMoreCount] = useAtom(showMoreCountAtom);
  const [filteredItems] = useAtom(filteredAtom);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    setIsLoading(true);
    // Simulate loading data for 1 second
    setTimeout(() => {
      setShowMoreCount((prevCount) => prevCount + 12);
      setIsLoading(false);
    }, 1000);
  };
  const isDisabled = filteredItems.length < showMoreCount;
  const variant = isDisabled ? 'flat' : 'solid';

  return (
    <React.Fragment>
      {/* ADD isLoading state to button if still fetching data */}
      <Button variant={variant} className='mt-14' color="default" size="lg" radius="sm"
      onPress={handleShowMore}
      onClick={handleShowMore} isDisabled={isDisabled} startContent={isLoading ? <CircularProgress color='default' aria-label='Loading...' classNames={{svg:'w-6 h-6'}} />  : ''}>
        {isLoading ? 'Loading'  : 'Show More'}
      </Button>
    </React.Fragment>
  );
};

export { ShowMoreButton };