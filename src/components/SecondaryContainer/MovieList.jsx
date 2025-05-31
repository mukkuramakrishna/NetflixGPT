import React from "react";
import MoviCard from "./MoviCard";

const MovieList = ({ title, movieList }) => {
  if (!movieList) return;
  console.log("movieList", movieList);

  return (
    <div className="pl-15">
      <h1 className="text-white text-xl py-2 font-bold">{title}</h1>
      <div className="flex  overflow-x-scroll">
        <div className="flex">
          {movieList.map((movie) => {
            return (
              <MoviCard key={movie?.id} poster_path={movie?.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
