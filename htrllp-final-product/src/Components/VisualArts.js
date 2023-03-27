import React, { useState } from "react";

export default function VisualArts() {
  const [view, setView] = useState(false);

  return (
    <h1
      style={{ opacity: view ? 1 : 0 }}
      className="section--header"
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      Visual Arts Home Page
    </h1>
  );
}
