import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";
import "./styles.scss";
AlbumList.propTypes = {
  albumList: PropTypes.array,
};
AlbumList.default = {
  albumList: [],
};

function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <AlbumItem albumItem={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
