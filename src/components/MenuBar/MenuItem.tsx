import React, { useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";

type Props = {
  children: React.ReactNode;
  setActive: Function;
};
export const MenuItem: React.FC<Props> = ({ children, setActive }) => {
  const [isEnter, setEnter] = useState(false);

  const handlerMouseEnter = () => {
    if (isDesktop) {
      setActive(true);
      setEnter(true);
    }
  };

  const handlerMouseLeave = () => {
    if (isDesktop) {
      setActive(false);
      setEnter(false);
    }
  };

  const handlerOnClick = () => {
    if (isMobile) {
      setEnter(!isEnter);
    }
  };

  return (
    <li
      onKeyDown={handlerOnClick}
      onClick={handlerOnClick}
      className={isEnter ? "on" : undefined}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      {children}
    </li>
  );
};
