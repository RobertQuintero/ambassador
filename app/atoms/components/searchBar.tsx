//searchFilter.tsx
"use client"
import React, { useState } from 'react';
import { CircularProgress, Input } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { inputAtom } from '../searchAtoms';

const SearchBar = () => {
  const [inputValue, setInputValue] = useAtom(inputAtom);

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
  setIsLoading(true);
  // Perform search logic here
  setTimeout(() => {
    setIsLoading(false);
  }, 2000); // Delay for 2 seconds
};

  const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const debouncedSearch = debounce(handleSearch, 500);


  return (
    <React.Fragment>
      <Input
        size='md'
        radius='sm'
        aria-label="Search"
        variant="bordered"
        color='default'
        type="search"
        value={inputValue}
        isInvalid={false}
        errorMessage={false}
        onChange={(e) => {
          setInputValue(e.target.value);
          debouncedSearch();
        }}
        placeholder="Enter search project title "
        className="w-full max-w-sm m-auto "
        startContent={
          <MagnifyingGlassIcon className="text-base text-default-400 pointer-events-none flex-shrink-0 w-4 h-4" />
        }
        endContent={ isLoading ?  <CircularProgress color='default' aria-label='Loading...' classNames={{svg:'w-5 h-5'}} />: ''
        }
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </React.Fragment>
  );
};

export { SearchBar };
