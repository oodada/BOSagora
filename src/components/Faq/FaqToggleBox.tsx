import React, { useState } from "react";

interface Props {
  defaultExpand?: boolean;
  children?: React.ReactNode;
}
export const FaqToggleBox: React.FC<Props> = React.memo(
  ({ defaultExpand = false, children }) => {
    const [isActive, setActive] = useState(defaultExpand);
    const handlerOnClick = React.useCallback(() => {
      setActive(!isActive);
    }, [isActive]);
    return (
      <li
        className={isActive ? "on" : undefined}
        onClick={handlerOnClick}
        onKeyDown={handlerOnClick}
      >
        {children}
      </li>
    );
  }
);
FaqToggleBox.displayName = "FaqToggleBox";
