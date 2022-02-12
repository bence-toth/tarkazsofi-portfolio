import { useCallback, useState } from "react";
import Menu from "./Menu";
import Intro from "./Intro";
import Stripes from "./Stripes";

import "./app.css";

const App = () => {
  const [contentSections, setContentSections] = useState([]);
  const contentRef = useCallback((node) => {
    const sections = [
      ...node.querySelectorAll(".intro,.contentSection,.siteFooter"),
    ];
    setContentSections(sections);
  }, []);

  return (
    <div className="app">
      <Menu contentSections={contentSections} />
      <main ref={contentRef}>
        <Intro />
        <div>
          <section className="contentSection" data-menu-title="Experience">
            <div className="contentInnerWrapper">
              <h3>Experience</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pharetra est nec nisl tincidunt tempus. Aliquam ac
                justo in nunc dignissim congue. In ornare augue in tempor
                vestibulum. Donec in scelerisque arcu, tempor egestas ante.
                Maecenas rutrum orci et nibh condimentum porta. Nulla turpis
                sapien, interdum sit amet leo pulvinar, consequat sodales
                sapien. Nulla id rutrum mi. Fusce varius porttitor porttitor. Ut
                eget mollis dui, nec imperdiet felis. Integer ac lectus id eros
                vestibulum imperdiet at at tortor. Fusce sed porta diam, sed
                eleifend odio. Cras quis odio non turpis dictum malesuada et ut
                odio. Aliquam suscipit mollis orci, at fringilla nisi feugiat
                nec. Nulla facilisi. Proin vitae auctor erat.
              </p>
              <p>
                In pharetra justo non sagittis blandit. Ut at posuere libero, ut
                fermentum turpis. Aliquam pulvinar condimentum justo.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nulla a justo eu erat euismod
                venenatis. Maecenas sollicitudin metus quis vestibulum
                tristique. Ut efficitur nulla turpis, at commodo est convallis
                non. Ut porta auctor sagittis. Vestibulum nec elementum est.
                Morbi laoreet augue quis velit euismod, at feugiat ipsum
                commodo. Nam lacinia nisl nec eros laoreet gravida. Proin ac
                augue eget leo euismod suscipit.
              </p>
              <p>
                Pellentesque id dignissim massa, id molestie est. Sed lorem
                tellus, vulputate condimentum dignissim eu, vehicula eu felis.
                Pellentesque ultrices dui odio, sit amet feugiat dolor viverra
                ac. Nam tempor massa in purus pellentesque eleifend. Maecenas
                ornare eleifend nisi ac cursus. Vivamus blandit mi sit amet
                faucibus cursus. Pellentesque laoreet purus eu tellus porta, et
                laoreet nulla aliquet.
              </p>
              <p>
                Sed lacus tortor, interdum a semper vel, pulvinar a leo. Nulla
                non eleifend nisl. Aenean ullamcorper quam diam, ac aliquet erat
                lacinia ut. Vivamus porttitor commodo purus ut porta. Phasellus
                non bibendum orci. Pellentesque in elementum justo. Integer sit
                amet maximus leo.
              </p>
              <p>
                Mauris ligula leo, auctor eu posuere ut, molestie a quam.
                Pellentesque nisl erat, tristique eget hendrerit vitae,
                malesuada in libero. Donec sodales viverra lacus, eget
                scelerisque urna semper eu. Sed at mi eu orci efficitur eleifend
                sed a erat. Ut porta facilisis feugiat. Praesent sollicitudin
                eleifend leo, vel pulvinar velit vehicula non. Phasellus
                faucibus rhoncus diam, sit amet luctus nibh faucibus vel. Nullam
                viverra rhoncus viverra. Nulla porttitor nibh ut nulla
                consequat, ut hendrerit urna ultrices. Aenean at sem nec nulla
                suscipit pretium.
              </p>
            </div>
          </section>
          <section className="contentSection" data-menu-title="Education">
            <div className="contentInnerWrapper">
              <h3>Education</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pharetra est nec nisl tincidunt tempus. Aliquam ac
                justo in nunc dignissim congue. In ornare augue in tempor
                vestibulum. Donec in scelerisque arcu, tempor egestas ante.
                Maecenas rutrum orci et nibh condimentum porta. Nulla turpis
                sapien, interdum sit amet leo pulvinar, consequat sodales
                sapien. Nulla id rutrum mi. Fusce varius porttitor porttitor. Ut
                eget mollis dui, nec imperdiet felis. Integer ac lectus id eros
                vestibulum imperdiet at at tortor. Fusce sed porta diam, sed
                eleifend odio. Cras quis odio non turpis dictum malesuada et ut
                odio. Aliquam suscipit mollis orci, at fringilla nisi feugiat
                nec. Nulla facilisi. Proin vitae auctor erat.
              </p>
              <p>
                In pharetra justo non sagittis blandit. Ut at posuere libero, ut
                fermentum turpis. Aliquam pulvinar condimentum justo.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nulla a justo eu erat euismod
                venenatis. Maecenas sollicitudin metus quis vestibulum
                tristique. Ut efficitur nulla turpis, at commodo est convallis
                non. Ut porta auctor sagittis. Vestibulum nec elementum est.
                Morbi laoreet augue quis velit euismod, at feugiat ipsum
                commodo. Nam lacinia nisl nec eros laoreet gravida. Proin ac
                augue eget leo euismod suscipit.
              </p>
              <p>
                Pellentesque id dignissim massa, id molestie est. Sed lorem
                tellus, vulputate condimentum dignissim eu, vehicula eu felis.
                Pellentesque ultrices dui odio, sit amet feugiat dolor viverra
                ac. Nam tempor massa in purus pellentesque eleifend. Maecenas
                ornare eleifend nisi ac cursus. Vivamus blandit mi sit amet
                faucibus cursus. Pellentesque laoreet purus eu tellus porta, et
                laoreet nulla aliquet.
              </p>
              <p>
                Sed lacus tortor, interdum a semper vel, pulvinar a leo. Nulla
                non eleifend nisl. Aenean ullamcorper quam diam, ac aliquet erat
                lacinia ut. Vivamus porttitor commodo purus ut porta. Phasellus
                non bibendum orci. Pellentesque in elementum justo. Integer sit
                amet maximus leo.
              </p>
              <p>
                Mauris ligula leo, auctor eu posuere ut, molestie a quam.
                Pellentesque nisl erat, tristique eget hendrerit vitae,
                malesuada in libero. Donec sodales viverra lacus, eget
                scelerisque urna semper eu. Sed at mi eu orci efficitur eleifend
                sed a erat. Ut porta facilisis feugiat. Praesent sollicitudin
                eleifend leo, vel pulvinar velit vehicula non. Phasellus
                faucibus rhoncus diam, sit amet luctus nibh faucibus vel. Nullam
                viverra rhoncus viverra. Nulla porttitor nibh ut nulla
                consequat, ut hendrerit urna ultrices. Aenean at sem nec nulla
                suscipit pretium.
              </p>
            </div>
          </section>
          <section
            className="contentSection"
            data-menu-title="Some other section"
          >
            <div className="contentInnerWrapper">
              <h3>Section 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pharetra est nec nisl tincidunt tempus. Aliquam ac
                justo in nunc dignissim congue. In ornare augue in tempor
                vestibulum. Donec in scelerisque arcu, tempor egestas ante.
                Maecenas rutrum orci et nibh condimentum porta. Nulla turpis
                sapien, interdum sit amet leo pulvinar, consequat sodales
                sapien. Nulla id rutrum mi. Fusce varius porttitor porttitor. Ut
                eget mollis dui, nec imperdiet felis. Integer ac lectus id eros
                vestibulum imperdiet at at tortor. Fusce sed porta diam, sed
                eleifend odio. Cras quis odio non turpis dictum malesuada et ut
                odio. Aliquam suscipit mollis orci, at fringilla nisi feugiat
                nec. Nulla facilisi. Proin vitae auctor erat.
              </p>
              <p>
                In pharetra justo non sagittis blandit. Ut at posuere libero, ut
                fermentum turpis. Aliquam pulvinar condimentum justo.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nulla a justo eu erat euismod
                venenatis. Maecenas sollicitudin metus quis vestibulum
                tristique. Ut efficitur nulla turpis, at commodo est convallis
                non. Ut porta auctor sagittis. Vestibulum nec elementum est.
                Morbi laoreet augue quis velit euismod, at feugiat ipsum
                commodo. Nam lacinia nisl nec eros laoreet gravida. Proin ac
                augue eget leo euismod suscipit.
              </p>
              <p>
                Pellentesque id dignissim massa, id molestie est. Sed lorem
                tellus, vulputate condimentum dignissim eu, vehicula eu felis.
                Pellentesque ultrices dui odio, sit amet feugiat dolor viverra
                ac. Nam tempor massa in purus pellentesque eleifend. Maecenas
                ornare eleifend nisi ac cursus. Vivamus blandit mi sit amet
                faucibus cursus. Pellentesque laoreet purus eu tellus porta, et
                laoreet nulla aliquet.
              </p>
              <p>
                Sed lacus tortor, interdum a semper vel, pulvinar a leo. Nulla
                non eleifend nisl. Aenean ullamcorper quam diam, ac aliquet erat
                lacinia ut. Vivamus porttitor commodo purus ut porta. Phasellus
                non bibendum orci. Pellentesque in elementum justo. Integer sit
                amet maximus leo.
              </p>
              <p>
                Mauris ligula leo, auctor eu posuere ut, molestie a quam.
                Pellentesque nisl erat, tristique eget hendrerit vitae,
                malesuada in libero. Donec sodales viverra lacus, eget
                scelerisque urna semper eu. Sed at mi eu orci efficitur eleifend
                sed a erat. Ut porta facilisis feugiat. Praesent sollicitudin
                eleifend leo, vel pulvinar velit vehicula non. Phasellus
                faucibus rhoncus diam, sit amet luctus nibh faucibus vel. Nullam
                viverra rhoncus viverra. Nulla porttitor nibh ut nulla
                consequat, ut hendrerit urna ultrices. Aenean at sem nec nulla
                suscipit pretium.
              </p>
            </div>
          </section>
          <section
            className="contentSection"
            data-menu-title="Yet another section"
          >
            <div className="contentInnerWrapper">
              <h3>Section 4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pharetra est nec nisl tincidunt tempus. Aliquam ac
                justo in nunc dignissim congue. In ornare augue in tempor
                vestibulum. Donec in scelerisque arcu, tempor egestas ante.
                Maecenas rutrum orci et nibh condimentum porta. Nulla turpis
                sapien, interdum sit amet leo pulvinar, consequat sodales
                sapien. Nulla id rutrum mi. Fusce varius porttitor porttitor. Ut
                eget mollis dui, nec imperdiet felis. Integer ac lectus id eros
                vestibulum imperdiet at at tortor. Fusce sed porta diam, sed
                eleifend odio. Cras quis odio non turpis dictum malesuada et ut
                odio. Aliquam suscipit mollis orci, at fringilla nisi feugiat
                nec. Nulla facilisi. Proin vitae auctor erat.
              </p>
              <p>
                In pharetra justo non sagittis blandit. Ut at posuere libero, ut
                fermentum turpis. Aliquam pulvinar condimentum justo.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nulla a justo eu erat euismod
                venenatis. Maecenas sollicitudin metus quis vestibulum
                tristique. Ut efficitur nulla turpis, at commodo est convallis
                non. Ut porta auctor sagittis. Vestibulum nec elementum est.
                Morbi laoreet augue quis velit euismod, at feugiat ipsum
                commodo. Nam lacinia nisl nec eros laoreet gravida. Proin ac
                augue eget leo euismod suscipit.
              </p>
              <p>
                Pellentesque id dignissim massa, id molestie est. Sed lorem
                tellus, vulputate condimentum dignissim eu, vehicula eu felis.
                Pellentesque ultrices dui odio, sit amet feugiat dolor viverra
                ac. Nam tempor massa in purus pellentesque eleifend. Maecenas
                ornare eleifend nisi ac cursus. Vivamus blandit mi sit amet
                faucibus cursus. Pellentesque laoreet purus eu tellus porta, et
                laoreet nulla aliquet.
              </p>
              <p>
                Sed lacus tortor, interdum a semper vel, pulvinar a leo. Nulla
                non eleifend nisl. Aenean ullamcorper quam diam, ac aliquet erat
                lacinia ut. Vivamus porttitor commodo purus ut porta. Phasellus
                non bibendum orci. Pellentesque in elementum justo. Integer sit
                amet maximus leo.
              </p>
              <p>
                Mauris ligula leo, auctor eu posuere ut, molestie a quam.
                Pellentesque nisl erat, tristique eget hendrerit vitae,
                malesuada in libero. Donec sodales viverra lacus, eget
                scelerisque urna semper eu. Sed at mi eu orci efficitur eleifend
                sed a erat. Ut porta facilisis feugiat. Praesent sollicitudin
                eleifend leo, vel pulvinar velit vehicula non. Phasellus
                faucibus rhoncus diam, sit amet luctus nibh faucibus vel. Nullam
                viverra rhoncus viverra. Nulla porttitor nibh ut nulla
                consequat, ut hendrerit urna ultrices. Aenean at sem nec nulla
                suscipit pretium.
              </p>
            </div>
          </section>
        </div>
        <footer className="siteFooter" data-menu-title="Contact me">
          <div className="contentInnerWrapper">
            <h3>Contact me</h3>
            <p>Contact info etc. will come here</p>
          </div>
        </footer>
      </main>
      <Stripes />
    </div>
  );
};

export default App;
