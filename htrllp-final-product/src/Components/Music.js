import React, { useState } from "react";

export default function Music() {
  const [view, setView] = useState(false);

  return (
    <>
      <h1
        style={{ opacity: view ? 1 : 0 }}
        className="section--header"
        onMouseEnter={() => setView(true)}
        onMouseLeave={() => setView(false)}
      >
        Music Home Page
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SGK00Q7xx-s"
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
      <p>
        “Blind” by Korn explores the themes of blindness and isolation. The
        lyrics explore the idea that the singer feels disconnected from the real
        world due to his drug addiction. The repeated line “You don’t know the
        chances, I’m so blind!” highlights blindness as a symbol for a lack of
        true perception of a non-drug-altered reality. The lyrics also explore
        the idea of isolation and disorientation as the singer’s drug-induced
        blindness causes him to “journey to live a life that seems to be a lost
        reality”. The chorus line of “I can see, I can see, I’m going blind”
        explains that the singer can observe the process of losing focus on the
        real world, but continues down that path regardless of the consequences.
        The blinding power of addiction draws the singer towards moral
        blindness.{" "}
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4NRXx6U8ABQ"
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
      <p>
        “Blinding Lights” by The Weeknd explores the singer’s break-up-induced
        blindness juxtaposed among the perennially lit background of Las Vegas.
        The lyrics include the repeated phrase “I can’t see clearly when you’re
        gone”, suggesting that the singer feels lost without his significant
        other. This suggests a type of innocence, one caused by constancy and
        jarred by dramatic changes such as a breakup. As such, the song suggests
        that when one is untethered from connection and purpose, they can become
        blind to the opportunities in the world due to their own sadness. The
        song’s upbeat tempo and melody contrast with the melancholy lyrics,
        hinting at the idea that the singer is trying to hide their emotions
        from their outward appearance. This type of blindness is external, but
        also serves to isolate the singer. The setting of Las Vegas also
        contributes to this idea as “Sin City” is known for its moral blindness
        and is often portrayed as a city where one can go to rid themselves of
        their sorrows. However, even in such a city, the singer is “just walking
        by to let you know”, indicating that this moral blindness has not fixed
        the hole in his heart.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MfaChKSV8kg"
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
      <p>
        “Three Blind Mice” is a nursery rhyme that tells the story of three
        blind mice who are being chased by a farmer&aposs wife with a carving knife.
        In its original context, it also alluded to the Protestant Loyalists
        Ridley, Latimer, and Cranmer, who were executed after being accused of
        plotting against Queen Mary I. Protestants were often persecuted at that
        time, and the loyalists were seen as being blind to the idea that they
        would not be accepted by the royals. The mice&aposs blindness indicates
        their inability to understand the danger that they are in, while the
        farmer&aposs wife (in this case, the Queen) can see the entire situation and
        thus take advantage of the power she wields.
      </p>
    </>
  );
}
