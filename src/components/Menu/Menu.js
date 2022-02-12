import Stripes from "../Stripes/Stripes";

import {
  useIsScrollPositionOnTop,
  useSectionIndexInViewport,
  useScrollToSection,
} from "./hooks";

import "./menu.css";

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
