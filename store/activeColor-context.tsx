import { createContext, useState } from "react";

const ActiveColorContext = createContext({
  activeColorIndex: 0,
  changeActiveColor: () => {},
});

export const ActiveColorContextProvider = ({ children }) => {
  // const [activeColor, setActiveColor] = useState([]);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const handleChangeActiveColor = (colorIndex) => {
    console.log("activeColorI", colorIndex);
    setActiveColorIndex(colorIndex);
    // setActiveColor(activeColor);
    setIndex(0);
  };

  const handleChangeIndex = (i) => {
    setIndex(i);
  };

  const contextValue = {
    activeColorIndex,
    changeActiveColor: handleChangeActiveColor,
    index,
    handleChangeIndex,
  };

  return (
    <ActiveColorContext.Provider value={contextValue}>
      {children}
    </ActiveColorContext.Provider>
  );
};

export default ActiveColorContext;
