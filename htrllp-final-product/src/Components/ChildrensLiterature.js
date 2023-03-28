import React, { useState } from "react";

export default function ChildrensLiterature() {
  const [view, setView] = useState(false);

  return (
    <>
      <h1
        style={{ opacity: view ? 1 : 0 }}
        className="section--header"
        onMouseEnter={() => setView(true)}
        onMouseLeave={() => setView(false)}
      >
        Children's Literature Home Page
      </h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
        alt="The Little Prince"
      />
      <p>
        “The Little Prince” by Antoine de Saint-Exupéry explores the idea of
        blindness to subjective reality in spite of objective sight. The story
        tells the tale of a young prince who encounters various characters who
        are unable to see the true reality of the world. He sees a businessman
        who is occupied with counting stars rather than appreciating their
        beauty, indicating a blindness induced by an obsession with material
        wealth. Another form of blindness is that of analysis, illustrated by a
        geographer who is more concerned with mapping the universe than
        experiencing it. The youth and innocence of the Little Prince allows him
        to see the world with his own eyes and appreciate the beauty of all
        aspects of life. As such, the prince is not blinded by desire as the
        other characters, allowing him to experience the world through his heart
        rather than simply view it through his eyes. Thus, it is shown that
        vision alone is not always enough to avoid blindness; feeling and
        perspective affect this as well.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/e/e5/The_Tale_of_Despereaux.jpg"
        alt="The Tale of Despereaux"
      />
      <p>
        “The Tale of Despereaux” by Kate DiCamillo highlights the contrast
        between blindness and sight by focusing on a mouse named Despereaux who
        is born with large ears and eyes, allowing him to experience the world
        to a fuller extent than the mice around him. While the other mice are
        satisfied with their lives, scavenging daily for food, Despereaux longs
        to see the outside world and goes on an adventure. This journey leads
        him to accept his extended senses and learn more about them. As such,
        this work explores the idea that one must look beyond the daily grind to
        experience the world on a fuller level, thus casting off the blindness
        of inexperience and becoming more worldly and appreciative as a result.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/79/The_Giving_Tree.jpg"
        alt="The Giving Tree"
      />
      <p>
        “The Giving Tree” by Shel Silverstein explores the themes of blindness
        and sight through the story of the relationship between a magical tree
        and a young boy. Initially, the boy and the tree have an amicable and
        positive relationship, where the boy enjoys playing on and around the
        tree while the tree provides the boy with everything he needs. Although
        he was originally grateful for the little gifts he received, the boy
        eventually becomes more and more self-centered and demanding, asking for
        larger gifts. The tree continues to provide for the boy while suffering,
        and the boy continues to demand gifts until the tree is weakened
        irrecoverably. Both the boy and the tree are blind in this tale, with
        the boy being unable to recognize the damage he is causing to the tree
        and the tree being blind to the idea of valuing its own self and
        relationship with the boy over providing all of the boy’s immediate
        wants.
      </p>
    </>
  );
}
