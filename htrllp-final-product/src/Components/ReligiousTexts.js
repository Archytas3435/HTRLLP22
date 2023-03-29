import React from "react";
import { useViews } from "../Utils";

export default function ReligiousTexts() {
  const [views, displayOnEnter, displayOnLeave] = useViews();

  return (
    <div className="religiousTexts">
      <div
        className="exhibit-8"
        style={{ opacity: views[7].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-8")}
        onMouseLeave={() => displayOnLeave("exhibit-8")}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWvJ-vzkz6kYiDQvHlxeOOSJiMsbAUDGAUPl4up5TL4eZCAsaPQNmCeLxFxPSWZcrUeM&usqp=CAU"
          alt="Dhritarashtra"
        />
        <p>
          In the Bhagavad Gita, the father of the Kauravas, Dhritarashtra, was
          born physically blind, but grew to be spiritually blind as well. One
          of the main reasons for the outbreak of the Kurukshetra war between
          the Kauravas and the Pandavas is the fact that {"Dhritarashtra's"}{" "}
          brother Pandu was chosen to ascend to the throne because he could see.
          This further led to {"Dhritarashtra's"} isolation and spiritual
          blindness as he felt wronged by this decision. Likewise, Dhritarashtra
          is blinded by his immense love for his sons, which causes him to
          overlook any possible acts of wrongdoing by them, further fueling the
          war. Dhritarashtra continually weakens his own position in the war by
          ignoring his
          {"advisor's"} advice and instead using his own instincts, illustrating
          how independence without regard for others can lead to negative
          outcomes.
          {"Dhritarashtra's"} physical blindness is a metaphor for his lack of
          vision for the future due to his ignorance.
        </p>
      </div>
      <div
        className="exhibit-9"
        style={{ opacity: views[8].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-9")}
        onMouseLeave={() => displayOnLeave("exhibit-9")}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Zohar.png"
          alt="The Zohar"
        />
        <p>
          The Zohar is a central work in Kabbalah, a type of Jewish mysticism.
          The text explores the idea of the limitations of human perception and
          understanding and continually refers to the notion that there is a
          deeper reality called Ein Sof that humans are unable to comprehend due
          to the limitations of their physical perception of the world. As such,
          it is argued that in order to truly understand the nature of the
          universe, one must undergo a spiritual transformation to understand
          the mystical realm, ultimately illustrating that while sight can lead
          to observation and knowledge, true understanding may require blindness
          to the limitations of rational thought.
        </p>
      </div>
    </div>
  );
}
