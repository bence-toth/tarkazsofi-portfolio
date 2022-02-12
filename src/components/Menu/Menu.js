import { useState } from "react";

import Stripes from "../Stripes/Stripes";

import {
  useIsScrollPositionOnTop,
  useSectionIndexInViewport,
  useScrollToSection,
} from "./hooks";

import "./menu.css";

const Menu = ({ contentSections, contentWrapper }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrollPositionOnTop = useIsScrollPositionOnTop({ contentWrapper });
  const sectionIndexInViewport = useSectionIndexInViewport({
    contentSections,
    contentWrapper,
  });
  const scrollToSection = useScrollToSection({
    contentSections,
    contentWrapper,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  });
  const menuItems = contentSections.map((section) => section.dataset.menuTitle);

  return (
    <>
      <div className={`menu ${isScrollPositionOnTop ? "hideShadow" : ""}`}>
        <Stripes />
        <nav className="contentInnerWrapper">
          <div className="menuStructure">
            <ul className="menuItems">
              {menuItems.slice(0, -1).map((item, index) => (
                <li key={index}>
                  <button
                    className={`menuItem ${
                      sectionIndexInViewport === index ? "active" : ""
                    }`}
                    onClick={() => {
                      scrollToSection(index);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className={`menuItem ${
                sectionIndexInViewport === menuItems.length - 1 ? "active" : ""
              }`}
              onClick={() => {
                scrollToSection(menuItems.length - 1);
              }}
            >
              {menuItems[menuItems.length - 1]}
            </button>
          </div>
        </nav>
      </div>
      <button
        className={`menuButton ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
      >
        <div />
        <div />
        <div />
      </button>
      <div className={`menuCanvas ${isMobileMenuOpen ? "open" : ""}`}></div>
      <div className={`mobileMenu ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="mobileMenuInnerWrapper">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`menuItem ${
                    sectionIndexInViewport === index ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(index);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
