import { useEffect, useState } from "react";
import "./App.css";
import portrait from "./portrait.png";

const App = () => {
  const [isScrollPositionOnTop, setIsScrollPositionOnTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrollPositionOnTop(window.scrollY === 0);
    });
  });

  const [sectionInViewportIndex, setSectionInViewportIndex] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll(
        ".intro,.contentSection,.siteFooter"
      );
      const currentSectionIndex = [...sections].findIndex((section) => {
        return section.offsetTop >= window.scrollY + window.innerHeight;
      });
      if (currentSectionIndex === -1) {
        setSectionInViewportIndex(sections.length - 1);
      } else {
        setSectionInViewportIndex(currentSectionIndex - 1);
      }
    });
  });

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll(
      ".intro,.contentSection,.siteFooter"
    );
    const section = sections[index];
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <div className={`menu ${isScrollPositionOnTop ? "hideShadow" : ""}`}>
        <div className="stripes">
          {Array(30)
            .fill(0)
            .map((_, i) => (
              <div key={i} />
            ))}
        </div>
        <nav className="contentInnerWrapper">
          <div className="menuStructure">
            <ul className="menuItems">
              <li>
                <button
                  className={`menuItem ${
                    sectionInViewportIndex === 0 ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(0);
                  }}
                >
                  Intro
                </button>
              </li>
              <li>
                <button
                  className={`menuItem ${
                    sectionInViewportIndex === 1 ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(1);
                  }}
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  className={`menuItem ${
                    sectionInViewportIndex === 2 ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(2);
                  }}
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  className={`menuItem ${
                    sectionInViewportIndex === 3 ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(3);
                  }}
                >
                  Section 3
                </button>
              </li>
              <li>
                <button
                  className={`menuItem ${
                    sectionInViewportIndex === 4 ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(4);
                  }}
                >
                  Section 4
                </button>
              </li>
            </ul>
            <button
              className={`menuItem ${
                sectionInViewportIndex === 5 ? "active" : ""
              }`}
              onClick={() => {
                scrollToSection(5);
              }}
            >
              Contact me
            </button>
          </div>
        </nav>
      </div>
      <header className="intro">
        <div
          className="contentInnerWrapper"
          style={{
            backgroundImage: `url(${portrait})`,
          }}
        >
          <div>
            <h1>
              Hi, I'm <span className="name">Zsófia Tárkányi</span>
            </h1>
            <h2>This is my mission statement.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pharetra est nec nisl tincidunt tempus. Aliquam ac justo in nunc
              dignissim congue. In ornare augue in tempor vestibulum. Donec in
              scelerisque arcu, tempor egestas ante. Maecenas rutrum orci et
              nibh condimentum porta. Nulla turpis sapien, interdum sit amet leo
              pulvinar, consequat sodales sapien.
            </p>
          </div>
        </div>
      </header>
      <section className="contentSection section1">
        <div className="contentInnerWrapper">
          <h3>Experience</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pharetra est nec nisl tincidunt tempus. Aliquam ac justo in nunc
            dignissim congue. In ornare augue in tempor vestibulum. Donec in
            scelerisque arcu, tempor egestas ante. Maecenas rutrum orci et nibh
            condimentum porta. Nulla turpis sapien, interdum sit amet leo
            pulvinar, consequat sodales sapien. Nulla id rutrum mi. Fusce varius
            porttitor porttitor. Ut eget mollis dui, nec imperdiet felis.
            Integer ac lectus id eros vestibulum imperdiet at at tortor. Fusce
            sed porta diam, sed eleifend odio. Cras quis odio non turpis dictum
            malesuada et ut odio. Aliquam suscipit mollis orci, at fringilla
            nisi feugiat nec. Nulla facilisi. Proin vitae auctor erat.
          </p>
          <p>
            In pharetra justo non sagittis blandit. Ut at posuere libero, ut
            fermentum turpis. Aliquam pulvinar condimentum justo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Nulla a justo eu erat euismod venenatis. Maecenas
            sollicitudin metus quis vestibulum tristique. Ut efficitur nulla
            turpis, at commodo est convallis non. Ut porta auctor sagittis.
            Vestibulum nec elementum est. Morbi laoreet augue quis velit
            euismod, at feugiat ipsum commodo. Nam lacinia nisl nec eros laoreet
            gravida. Proin ac augue eget leo euismod suscipit.
          </p>
          <p>
            Pellentesque id dignissim massa, id molestie est. Sed lorem tellus,
            vulputate condimentum dignissim eu, vehicula eu felis. Pellentesque
            ultrices dui odio, sit amet feugiat dolor viverra ac. Nam tempor
            massa in purus pellentesque eleifend. Maecenas ornare eleifend nisi
            ac cursus. Vivamus blandit mi sit amet faucibus cursus. Pellentesque
            laoreet purus eu tellus porta, et laoreet nulla aliquet.
          </p>
          <p>
            Sed lacus tortor, interdum a semper vel, pulvinar a leo. Nulla non
            eleifend nisl. Aenean ullamcorper quam diam, ac aliquet erat lacinia
            ut. Vivamus porttitor commodo purus ut porta. Phasellus non bibendum
            orci. Pellentesque in elementum justo. Integer sit amet maximus leo.
          </p>
          <p>
            Mauris ligula leo, auctor eu posuere ut, molestie a quam.
            Pellentesque nisl erat, tristique eget hendrerit vitae, malesuada in
            libero. Donec sodales viverra lacus, eget scelerisque urna semper
            eu. Sed at mi eu orci efficitur eleifend sed a erat. Ut porta
            facilisis feugiat. Praesent sollicitudin eleifend leo, vel pulvinar
            velit vehicula non. Phasellus faucibus rhoncus diam, sit amet luctus
            nibh faucibus vel. Nullam viverra rhoncus viverra. Nulla porttitor
            nibh ut nulla consequat, ut hendrerit urna ultrices. Aenean at sem
            nec nulla suscipit pretium.
          </p>
        </div>
      </section>
      <section className="contentSection section2">
        <div className="contentInnerWrapper">
          <h3>Education</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pharetra est nec nisl tincidunt tempus. Aliquam ac justo in nunc
            dignissim congue. In ornare augue in tempor vestibulum. Donec in
            scelerisque arcu, tempor egestas ante. Maecenas rutrum orci et nibh
            condimentum porta. Nulla turpis sapien, interdum sit amet leo
            pulvinar, consequat sodales sapien. Nulla id rutrum mi. Fusce varius
            porttitor porttitor. Ut eget mollis dui, nec imperdiet felis.
            Integer ac lectus id eros vestibulum imperdiet at at tortor. Fusce
            sed porta diam, sed eleifend odio. Cras quis odio non turpis dictum
            malesuada et ut odio. Aliquam suscipit mollis orci, at fringilla
            nisi feugiat nec. Nulla facilisi. Proin vitae auctor erat.
          </p>
          <p>
            In pharetra justo non sagittis blandit. Ut at posuere libero, ut
            fermentum turpis. Aliquam pulvinar condimentum justo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Nulla a justo eu erat euismod venenatis. Maecenas
            sollicitudin metus quis vestibulum tristique. Ut efficitur nulla
            turpis, at commodo est convallis non. Ut porta auctor sagittis.
            Vestibulum nec elementum est. Morbi laoreet augue quis velit
            euismod, at feugiat ipsum commodo. Nam lacinia nisl nec eros laoreet
            gravida. Proin ac augue eget leo euismod suscipit.
          </p>
          <p>
            Pellentesque id dignissim massa, id molestie est. Sed lorem tellus,
            vulputate condimentum dignissim eu, vehicula eu felis. Pellentesque
            ultrices dui odio, sit amet feugiat dolor viverra ac. Nam tempor
            massa in purus pellentesque eleifend. Maecenas ornare eleifend nisi
            ac cursus. Vivamus blandit mi sit amet faucibus cursus. Pellentesque
            laoreet purus eu tellus porta, et laoreet nulla aliquet.
          </p>
          <p>
            Sed lacus tortor, interdum a semper vel, pulvinar a leo. Nulla non
            eleifend nisl. Aenean ullamcorper quam diam, ac aliquet erat lacinia
            ut. Vivamus porttitor commodo purus ut porta. Phasellus non bibendum
            orci. Pellentesque in elementum justo. Integer sit amet maximus leo.
          </p>
          <p>
            Mauris ligula leo, auctor eu posuere ut, molestie a quam.
            Pellentesque nisl erat, tristique eget hendrerit vitae, malesuada in
            libero. Donec sodales viverra lacus, eget scelerisque urna semper
            eu. Sed at mi eu orci efficitur eleifend sed a erat. Ut porta
            facilisis feugiat. Praesent sollicitudin eleifend leo, vel pulvinar
            velit vehicula non. Phasellus faucibus rhoncus diam, sit amet luctus
            nibh faucibus vel. Nullam viverra rhoncus viverra. Nulla porttitor
            nibh ut nulla consequat, ut hendrerit urna ultrices. Aenean at sem
            nec nulla suscipit pretium.
          </p>
        </div>
      </section>
      <section className="contentSection section3">
        <div className="contentInnerWrapper">
          <h3>Section 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pharetra est nec nisl tincidunt tempus. Aliquam ac justo in nunc
            dignissim congue. In ornare augue in tempor vestibulum. Donec in
            scelerisque arcu, tempor egestas ante. Maecenas rutrum orci et nibh
            condimentum porta. Nulla turpis sapien, interdum sit amet leo
            pulvinar, consequat sodales sapien. Nulla id rutrum mi. Fusce varius
            porttitor porttitor. Ut eget mollis dui, nec imperdiet felis.
            Integer ac lectus id eros vestibulum imperdiet at at tortor. Fusce
            sed porta diam, sed eleifend odio. Cras quis odio non turpis dictum
            malesuada et ut odio. Aliquam suscipit mollis orci, at fringilla
            nisi feugiat nec. Nulla facilisi. Proin vitae auctor erat.
          </p>
          <p>
            In pharetra justo non sagittis blandit. Ut at posuere libero, ut
            fermentum turpis. Aliquam pulvinar condimentum justo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Nulla a justo eu erat euismod venenatis. Maecenas
            sollicitudin metus quis vestibulum tristique. Ut efficitur nulla
            turpis, at commodo est convallis non. Ut porta auctor sagittis.
            Vestibulum nec elementum est. Morbi laoreet augue quis velit
            euismod, at feugiat ipsum commodo. Nam lacinia nisl nec eros laoreet
            gravida. Proin ac augue eget leo euismod suscipit.
          </p>
          <p>
            Pellentesque id dignissim massa, id molestie est. Sed lorem tellus,
            vulputate condimentum dignissim eu, vehicula eu felis. Pellentesque
            ultrices dui odio, sit amet feugiat dolor viverra ac. Nam tempor
            massa in purus pellentesque eleifend. Maecenas ornare eleifend nisi
            ac cursus. Vivamus blandit mi sit amet faucibus cursus. Pellentesque
            laoreet purus eu tellus porta, et laoreet nulla aliquet.
          </p>
          <p>
            Sed lacus tortor, interdum a semper vel, pulvinar a leo. Nulla non
            eleifend nisl. Aenean ullamcorper quam diam, ac aliquet erat lacinia
            ut. Vivamus porttitor commodo purus ut porta. Phasellus non bibendum
            orci. Pellentesque in elementum justo. Integer sit amet maximus leo.
          </p>
          <p>
            Mauris ligula leo, auctor eu posuere ut, molestie a quam.
            Pellentesque nisl erat, tristique eget hendrerit vitae, malesuada in
            libero. Donec sodales viverra lacus, eget scelerisque urna semper
            eu. Sed at mi eu orci efficitur eleifend sed a erat. Ut porta
            facilisis feugiat. Praesent sollicitudin eleifend leo, vel pulvinar
            velit vehicula non. Phasellus faucibus rhoncus diam, sit amet luctus
            nibh faucibus vel. Nullam viverra rhoncus viverra. Nulla porttitor
            nibh ut nulla consequat, ut hendrerit urna ultrices. Aenean at sem
            nec nulla suscipit pretium.
          </p>
        </div>
      </section>
      <section className="contentSection section4">
        <div className="contentInnerWrapper">
          <h3>Section 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pharetra est nec nisl tincidunt tempus. Aliquam ac justo in nunc
            dignissim congue. In ornare augue in tempor vestibulum. Donec in
            scelerisque arcu, tempor egestas ante. Maecenas rutrum orci et nibh
            condimentum porta. Nulla turpis sapien, interdum sit amet leo
            pulvinar, consequat sodales sapien. Nulla id rutrum mi. Fusce varius
            porttitor porttitor. Ut eget mollis dui, nec imperdiet felis.
            Integer ac lectus id eros vestibulum imperdiet at at tortor. Fusce
            sed porta diam, sed eleifend odio. Cras quis odio non turpis dictum
            malesuada et ut odio. Aliquam suscipit mollis orci, at fringilla
            nisi feugiat nec. Nulla facilisi. Proin vitae auctor erat.
          </p>
          <p>
            In pharetra justo non sagittis blandit. Ut at posuere libero, ut
            fermentum turpis. Aliquam pulvinar condimentum justo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Nulla a justo eu erat euismod venenatis. Maecenas
            sollicitudin metus quis vestibulum tristique. Ut efficitur nulla
            turpis, at commodo est convallis non. Ut porta auctor sagittis.
            Vestibulum nec elementum est. Morbi laoreet augue quis velit
            euismod, at feugiat ipsum commodo. Nam lacinia nisl nec eros laoreet
            gravida. Proin ac augue eget leo euismod suscipit.
          </p>
          <p>
            Pellentesque id dignissim massa, id molestie est. Sed lorem tellus,
            vulputate condimentum dignissim eu, vehicula eu felis. Pellentesque
            ultrices dui odio, sit amet feugiat dolor viverra ac. Nam tempor
            massa in purus pellentesque eleifend. Maecenas ornare eleifend nisi
            ac cursus. Vivamus blandit mi sit amet faucibus cursus. Pellentesque
            laoreet purus eu tellus porta, et laoreet nulla aliquet.
          </p>
          <p>
            Sed lacus tortor, interdum a semper vel, pulvinar a leo. Nulla non
            eleifend nisl. Aenean ullamcorper quam diam, ac aliquet erat lacinia
            ut. Vivamus porttitor commodo purus ut porta. Phasellus non bibendum
            orci. Pellentesque in elementum justo. Integer sit amet maximus leo.
          </p>
          <p>
            Mauris ligula leo, auctor eu posuere ut, molestie a quam.
            Pellentesque nisl erat, tristique eget hendrerit vitae, malesuada in
            libero. Donec sodales viverra lacus, eget scelerisque urna semper
            eu. Sed at mi eu orci efficitur eleifend sed a erat. Ut porta
            facilisis feugiat. Praesent sollicitudin eleifend leo, vel pulvinar
            velit vehicula non. Phasellus faucibus rhoncus diam, sit amet luctus
            nibh faucibus vel. Nullam viverra rhoncus viverra. Nulla porttitor
            nibh ut nulla consequat, ut hendrerit urna ultrices. Aenean at sem
            nec nulla suscipit pretium.
          </p>
        </div>
      </section>
      <footer className="siteFooter">
        <div className="contentInnerWrapper">
          <h3>Contact me</h3>
          <p>Contact info etc. will come here</p>
        </div>
      </footer>
      <div className="stripes">
        {Array(30)
          .fill(0)
          .map((_, i) => (
            <div key={i} />
          ))}
      </div>
    </div>
  );
};

export default App;
