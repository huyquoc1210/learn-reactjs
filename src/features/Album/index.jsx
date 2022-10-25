import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: "JavaScript",
      thumbnailUrl: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    },
    {
      id: 2,
      name: "Responsive",
      thumbnailUrl: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    },
    {
      id: 3,
      name: "ReactJs",
      thumbnailUrl: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
    },
  ];
  return (
    <div>
      <h2>Co the ban se thich day</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;
