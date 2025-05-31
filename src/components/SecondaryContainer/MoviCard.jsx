import React from "react";

const MoviCard = ({ poster_path }) => {
  return (
    <img
      className="w-40 h-40 mr-2"
      src={"https://image.tmdb.org/t/p/w500/" + poster_path}
    />
  );
};

export default MoviCard;
