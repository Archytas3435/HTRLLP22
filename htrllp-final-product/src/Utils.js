import { useState } from "react";

export function useViews() {
  const [views, setViews] = useState([
    {
      id: "exhibit-1",
      value: false,
    },
    { id: "exhibit-2", value: false },
    { id: "exhibit-3", value: false },
    { id: "exhibit-4", value: false },
    { id: "exhibit-5", value: false },
    { id: "exhibit-6", value: false },
    { id: "exhibit-7", value: false },
    { id: "exhibit-8", value: false },
    { id: "exhibit-9", value: false },
    { id: "exhibit-10", value: false },
    { id: "exhibit-11", value: false },
    { id: "exhibit-12", value: false },
    { id: "exhibit-13", value: false },
    { id: "exhibit-14", value: false },
  ]);

  function displayOnEnter(id) {
    const updatedViews = views.map((view) =>
      view.id === id ? { ...view, value: true } : view
    );
    setViews(updatedViews);
  }

  function displayOnLeave(id) {
    const updatedViews = views.map((view) =>
      view.id === id ? { ...view, value: false } : view
    );
    setViews(updatedViews);
  }

  return [views, displayOnEnter, displayOnLeave];
}

export function iFrameProps(id) {
  return (
    <iframe
      width="700"
      height="400"
      src={`https://www.youtube.com/embed/${id}`}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
}
