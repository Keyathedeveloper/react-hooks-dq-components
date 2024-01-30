import React from "react";
import TopMenu from "./TopMenu";
import GenrePicker from "./GenrePicker";
import AlbumCard from "./AlbumCard";

function MainContent() {
  return <main>
    <TopMenu />,
    <GenrePicker />,
    <AlbumCard />
  </main>;
}

export default MainContent;
