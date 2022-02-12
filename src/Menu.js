import { useState, useCallback, useEffect } from "react";
import Stripes from "./Stripes";

import "./menu.css";

const useIsScrollPositionOnTop = () => {
  const [isScrollPositionOnTop, setIsScrollPositionOnTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrollPositionOnTop(window.scrollY === 0);
    });
    // TODO: Cleanup
  });

  return isScrollPositionOnTop;
};

const useSectionIndexInViewport = ({ contentSections }) => {
  const [sectionIndexInViewport, setSectionIndexInViewport] = useState(0);

  const someF = useCallback(() => {
    const currentSectionIndex = [...contentSections].findIndex(
      (section) => section.offsetTop >= window.scrollY + window.innerHeight
    );
    if (currentSectionIndex === -1) {
      setSectionIndexInViewport(contentSections.length - 1);
    } else {
      setSectionIndexInViewport(currentSectionIndex - 1);
    }
  }, [contentSections]);

  useEffect(() => {
    window.addEventListener("scroll", someF);
    // TODO: Cleanup
  });

  return sectionIndexInViewport;
};

const useScrollToSection = ({ contentSections }) => {
  const scrollToSection = useCallback(
    (index) => {
      const section = contentSections[index];
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    },
    [contentSections]
  );

  return scrollToSection;
};

const Menu = ({ contentSections }) => {
  const isScrollPositionOnTop = useIsScrollPositionOnTop();
  const sectionIndexInViewport = useSectionIndexInViewport({ contentSections });
  const scrollToSection = useScrollToSection({ contentSections });
  const menuItems = contentSections.map((section) => section.dataset.menuTitle);

  return (
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
  );
};

export default Menu;
