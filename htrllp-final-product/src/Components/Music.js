import React from "react";
import { useViews, iFrameProps } from "../Utils";

export default function Music() {
  const [views, displayOnEnter, displayOnLeave] = useViews();

  return (
    <div className="music">
      <div
        className="exhibit-10"
        style={{ opacity: views[9].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-10")}
        onMouseLeave={() => displayOnLeave("exhibit-10")}
      >
        {iFrameProps("SGK00Q7xx-s")}
        <p>
          “Blind” by Korn explores the themes of blindness and isolation. The
          lyrics explore the idea that the singer feels disconnected from the
          real world due to his drug addiction. The repeated line “
          <span className="bold">
            You {"don't"} know the chances, {"I'm"} so blind
          </span>
          ” highlights blindness as a symbol for a lack of true perception of a
          non-drug-altered reality. The lyrics also explore the idea of
          isolation and disorientation as the {"singer's"} drug-induced
          blindness causes him to{" "}
          <span className="bold">
            “journey to live a life that seems to be a lost reality
          </span>
          ”. The chorus line of “
          <span className="bold">
            I can see, I can see, {"I'm"} going blind
          </span>
          ” explains that the singer can observe the process of losing focus on
          the real world, but continues down that path regardless of the
          consequences. The blinding power of addiction draws the singer towards
          moral blindness.{" "}
        </p>
      </div>
      <div
        className="exhibit-11"
        style={{ opacity: views[10].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-11")}
        onMouseLeave={() => displayOnLeave("exhibit-11")}
      >
        {iFrameProps("4NRXx6U8ABQ")}
        <p>
          “Blinding Lights” by The Weeknd explores the {"singer's"}{" "}
          break-up-induced blindness juxtaposed among the perennially lit
          background of Las Vegas. The lyrics include the repeated phrase “
          <span className="bold">
            I {"can't"} see clearly when {"you're"} gone
          </span>
          ”, suggesting that the singer feels lost without his significant
          other. This suggests a type of innocence, one caused by constancy and
          jarred by dramatic changes such as a breakup. As such, the song
          suggests that when one is untethered from connection and purpose, they
          can become blind to the opportunities in the world due to their own
          sadness. The
          {"song's"} upbeat tempo and melody contrast with the melancholy
          lyrics, hinting at the idea that the singer is trying to hide their
          emotions from their outward appearance. This type of blindness is
          external, but also serves to isolate the singer. The setting of Las
          Vegas also contributes to this idea as “
          <span className="bold">Sin City</span>” is known for its moral
          blindness and is often portrayed as a city where one can go to rid
          themselves of their sorrows. However, even in such a city, the singer
          is “<span className="bold">just walking by to let you know</span>”,
          indicating that this moral blindness has not fixed the hole in his
          heart.
        </p>
      </div>
      <div
        className="exhibit-12"
        style={{ opacity: views[11].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-12")}
        onMouseLeave={() => displayOnLeave("exhibit-12")}
      >
        {iFrameProps("MfaChKSV8kg")}
        <p>
          “Three Blind Mice” is a nursery rhyme that tells the story of three
          blind mice who are being chased by a {"farmer's"} wife with a carving
          knife. In its original context, it also alluded to the Protestant
          Loyalists Ridley, Latimer, and Cranmer, who were executed after being
          accused of plotting against Queen Mary I. Protestants were often
          persecuted at that time, and the loyalists were seen as being blind to
          the idea that they would not be accepted by the royals. The {"mice's"}
          blindness indicates their inability to understand the danger that they
          are in, while the {"farmer's"} wife (in this case, the Queen) can see
          the entire situation and thus take advantage of the power she wields.
        </p>
      </div>
    </div>
  );
}
