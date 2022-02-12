import portrait from "./portrait.png";

import "./intro.css";

const Intro = () => (
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
          scelerisque arcu, tempor egestas ante. Maecenas rutrum orci et nibh
          condimentum porta. Nulla turpis sapien, interdum sit amet leo
          pulvinar, consequat sodales sapien.
        </p>
      </div>
    </div>
  </header>
);

export default Intro;
