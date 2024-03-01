"use client";
import { createContext, useState } from "react";

interface FilterContextValueProps {
  isFilterOpen: boolean;
  openFilter: () => void;
  closeFilter: () => void;
}

const FilterContext = createContext<FilterContextValueProps>({
  isFilterOpen: false,
  openFilter: () => {},
  closeFilter: () => {},
});
export default FilterContext;

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const openFilterHandler = () => {
    setIsFilterOpen(true);
  };
  const closeFilterHandler = () => {
    setIsFilterOpen(false);
  };

  const contextValue: FilterContextValueProps = {
    isFilterOpen,
    openFilter: openFilterHandler,
    closeFilter: closeFilterHandler,
  };
  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
