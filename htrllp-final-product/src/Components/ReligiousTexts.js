import React, { useState } from "react";

export default function ReligiousTexts() {
  const [view, setView] = useState(false);

  return (
    <h1
      style={{ opacity: view ? 1 : 0 }}
      className="section--header"
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      Religious Texts Home Page
    </h1>
  );
}
