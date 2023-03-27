import React, { useState } from "react";

export default function Movies() {
  const [view, setView] = useState(false);

  return (
    <h1
      style={{ opacity: view ? 1 : 0 }}
      className="section--header"
      onMouseOver={() => setView(true)}
      onMouseOut={() => setView(false)}
    >
      Movies Home Page
    </h1>
  );
}
