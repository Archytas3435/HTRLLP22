import React from "react";
import { useViews } from "../Utils";

export default function VisualArts() {
  const [views, displayOnEnter, displayOnLeave] = useViews();

  return (
    <div className="visualArts">
      <div
        className="exhibit-1"
        style={{ opacity: views[0].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-1")}
        onMouseLeave={() => displayOnLeave("exhibit-1")}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pieter_Brueghel_the_Younger—The_Parable_of_the_Blind.jpg/378px-Pieter_Brueghel_the_Younger—The_Parable_of_the_Blind.jpg"
          alt="The Blind Leading the Blind"
        />
        <p>
          “The Blind Leading the Blind” by Pieter Bruegel the Elder is a
          painting depicting six blind men following another blind man with a
          stick. The men are walking towards a ditch, where the lead man is
          about to fall. The painting is an allegory for the dangers of blindly
          following a leader without independent critical thinking. The
          {"men's"} blindness prevents them from being able to see the danger
          they are approaching. This could be interpreted as an inability to
          recognize the truth of {"one's"} situation or the infallibility of
          authority. “The Blind Leading the Blind” is a cautionary tale about
          the dangers of blindly following a supposed leader and the need for
          sight, and metaphorically insight, to walk an enlightened path.
        </p>
      </div>
      <div
        className="exhibit-2"
        style={{ opacity: views[1].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-2")}
        onMouseLeave={() => displayOnLeave("exhibit-2")}
      >
        <img
          src="https://cdn.smarthistory.org/wp-content/uploads/2021/02/Fragonard-Swing-Whole.jpg"
          alt="The Swing"
        />
        <p>
          “The Swing” by Jean-Honoré Fragonard exemplifies ideas of blindness
          through both its subject matter and its broader historical context in
          Rococo France. The painting depicts a young woman on a swing being
          pushed by an older man, presumably her husband, while being watched by
          a young man looking up the {"woman's"} dress hidden from below. The
          woman is partaking in an aristocratic activity supposed to take place
          in private, and as such, is blind to both the desires of her lover and
          the societal unrest of the lower classes in pre-Revolution France. Her
          innocence blinds her to the reality of discourse and desire in the
          world. The {"woman's"} husband is equally blind to the {"woman's"}
          lover, indicating a lack of value towards the woman. “The Swing”
          utilizes blindness in the non-literal sense to convey the limits of
          human perception, especially of the out-of-touch nature of the
          superficial elite.{" "}
        </p>
      </div>
      <div
        className="exhibit-3"
        style={{ opacity: views[2].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-3")}
        onMouseLeave={() => displayOnLeave("exhibit-3")}
      >
        <img
          src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/488596/1009265/restricted"
          alt="The Blind Man's Meal"
        />
        <p>
          Created by Picasso during his Blue Period, “The Blind {"man's"} Meal”
          illustrates a blind man sitting somberly at a dining table, looking
          down at his plate. The blind man is unable to experience the world
          around him or see the food on his plate, suggesting that he is limited
          in his ability to understand the world and is thus more vulnerable and
          dependent. Similarly, the {"man's"} position as the only figure in the
          painting adds to a sense of isolation, conveying how blindness can
          lead to marginalization. As this work was created during {"Picasso's"}
          depression, it also serves as a medium to express the isolation he
          felt at not being able to see the true meaning behind the death of his
          close friend, which caused his own depression. The painting encourages
          the viewer to recognize that blindness can cause isolation and limit
          {"one's"} ability to recognize the truth.
        </p>
      </div>
    </div>
  );
}
