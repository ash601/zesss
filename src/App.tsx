import "./styles.css";

import React, { useState } from "react";
import moonWalk from "./assests/moonWalk.jpg";
import space from "./assests/space.jpg";
import cycle from "./assests/cycle.jpg";
import spaceLeg from "./assests/spaceLeg.jpg";
import sunFlow from "./assests/sunFlor.jpg";
import ufo from "./assests/ufo.jpg";

const image = [moonWalk, space, cycle, spaceLeg, sunFlow, ufo];

const App = () => {
  const [curImg, setCurImage] = useState(0);
  const [numberLoaded, numIncreaseer] = useState(0);

  const handleClick = () => {
    setCurImage((curImgValue) =>
      curImgValue < image.length - 1 ? curImgValue + 1 : 0
    );
  };

  return (
    <section className="App">
      <header className="title">
        <h1>Zesty</h1>

        <h2>
          Photography Project <br />
          by zelena
        </h2>
      </header>

      <figure className="image-container">
        <figcaption>
          {curImg + 1}/{image.length}
        </figcaption>
        <img src={image[curImg]} alt="Gallery Image" onClick={handleClick} />;
      </figure>
    </section>
  );
};

export default App;
