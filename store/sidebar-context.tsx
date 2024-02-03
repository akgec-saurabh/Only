"use client";
import { createContext, useState } from "react";

interface SidebarContextProps {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
});

export default SidebarContext;

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openSidebarHandler = () => {
    setIsOpen(true);
  };
  const closeSidebarHandler = () => {
    setIsOpen(false);
  };

  const contextValues: SidebarContextProps = {
    isOpen,
    openSidebar: openSidebarHandler,
    closeSidebar: closeSidebarHandler,
  };
  return (
    <SidebarContext.Provider value={contextValues}>
      {children}
    </SidebarContext.Provider>
  );
};
