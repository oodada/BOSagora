import React, { useEffect, useState } from "react";
import { MenuBar } from "../MenuBar/MenuBar";
import { Footer } from "../Footer/Footer";
import { Element } from "react-scroll";
import { isMobile } from "react-device-detect";

interface Props {
  children?: React.ReactNode;
  className?: string;
}
export const PageWrapper: React.FC<Props> = ({ children, className }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(className);

  const controlNavbar = () => {
    if (typeof window !== "undefined" && !isMobile) {
      if (window.scrollY > 50 && window.scrollY > lastScrollY) {
        setShow(false);
        setScrolled(className);
      } else {
        setShow(true);
        if (window.scrollY === 0) {
          setScrolled(className);
        } else {
          if (className === "intro") {
            if (window.scrollY > 50) {
              setScrolled("scrolled");
            } else {
              setScrolled(className);
            }
          } else {
            setScrolled("scrolled " + className);
          }
        }
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && !isMobile) {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    // scrolled 스크롤업 : 붙여주세요~ 감사합니다.
    // 스크롤다운 : 안붙여주셔도 됩니다.
    <div id="wrap" className={scrolled}>
      <Element name="top" />
      <MenuBar show={show} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};
