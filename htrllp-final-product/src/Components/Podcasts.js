import React, { useState } from "react";

export default function Podcasts() {
  const [view, setView] = useState(false);

  return (
    <h1
      style={{ opacity: view ? 1 : 0 }}
      className="section--header"
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      Podcasts Home Page
    </h1>
  );
}
