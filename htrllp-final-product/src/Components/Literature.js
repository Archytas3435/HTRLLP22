import React from "react";
import { useViews } from "../Utils";

export default function Literature() {
  const [views, displayOnEnter, displayOnLeave] = useViews();

  return (
    <div className="literature">
      <div
        className="exhibit-4"
        style={{ opacity: views[3].value ? 1 : 0 }}
        onMouseEnter={() => displayOnEnter("exhibit-4")}
        onMouseLeave={() => displayOnLeave("exhibit-4")}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/Lady_Macbeth_Cattermole.jpg"
          alt="Lady Macbeth and Duncan"
        />
        <p>
          {"Shakespeare's"} tragedy “Macbeth” reflects the idea of blindness in
          multiple characters. Macbeth starts off quite weary of the lengths he
          must go to become Thane of Cawdor, and then King, but becomes
          increasingly blinded by his lust for power, ultimately leading to his
          downfall. Lady Macbeth takes an almost opposite journey, originally
          blinded by the idea of being queen, but increasingly aware and
          resistant of the violence necessary for Macbeth to become and stay
          king. The original king, King Duncan, also embodies the theme of
          blindness as he is blind to the true nature of Macbeth and the danger
          he poses. Despite {"Macbeth's"} need for power, Duncan is blinded by
          his belief in honor and relationships, and is killed as a result. This
          example of blindness by innocence emphasizes the idea that blindness
          can have tragic consequences.
        </p>
      </div>
    </div>
  );
}
