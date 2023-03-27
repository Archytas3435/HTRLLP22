import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import ChildrensLiterature from "./Components/ChildrensLiterature";
import Literature from "./Components/Literature";
import Movies from "./Components/Movies";
import Music from "./Components/Music";
import Podcasts from "./Components/Podcasts";
import ReligiousTexts from "./Components/ReligiousTexts";
import VisualArts from "./Components/VisualArts";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="pages">
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path="/visualarts" element={<VisualArts />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/literature" element={<Literature />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route
            path="/childrenliterature"
            element={<ChildrensLiterature />}
          ></Route>
          <Route path="/religioustexts" element={<ReligiousTexts />}></Route>
          <Route path="/podcasts" element={<Podcasts />}></Route>
        </Routes>
      </div>
    </div>
  );
}
