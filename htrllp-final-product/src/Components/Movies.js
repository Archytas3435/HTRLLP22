import React, { useState } from "react";

export default function Movies() {
  const [view, setView] = useState(false);

  return (
    <>
      <h1
        style={{ opacity: view ? 1 : 0 }}
        className="section--header"
        onMouseOver={() => setView(true)}
        onMouseOut={() => setView(false)}
      >
        Movies Home Page
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IBLK5FAAp1Q"
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
      <p>
        “Bird Box” by Susanne Bier explores the idea of a balance between sight
        and blindness. The movie tells the story of a mother and her children as
        they live in a world with a mysterious creature that causes those who
        see it to go insane. In order to survive, the characters must wear
        blindfolds. This intentional blindness reflects a lack of confrontation
        of trauma, while the idea that seeing too much can lead to madness
        explores the idea of the value and power of innocence. The idea that the
        characters who remain blindfolded survive while those who look will meet
        their demise suggests that living in innocence is often the safer
        choice. However, the difficulty of navigating in such a world
        illustrates the power of vision. As such, the characters are forced to
        reckon with balancing sight and blindness.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/H-0RHqDWcJE"
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
      <p>
        The film “The Matrix” explores the idea of blindness, but for the
        entirety of humanity rather than just a single character. In the movie,
        all of society is kept in a state of illusion and is unaware that
        reality is just a simulation. While not literal blindness, the world is
        kept in a state of metaphorical blindness, unaware that their life is
        purely simulated. Neo, the protagonist of the film, goes through an
        awakening after he is disconnected from the Matrix. This removal of
        metaphorical blindness is not without difficulty, as Neo struggles with
        many aspects of his training to fight the agents of the Matrix. However,
        it was necessary for him to lose his blindness before he could be ready
        to save others from blindness. This suggests that some truth is
        necessary in order to achieve true truth.
      </p>
    </>
  );
}
