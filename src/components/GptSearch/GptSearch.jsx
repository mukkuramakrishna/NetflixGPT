import React from "react";
import GtpMovieSuggestions from "./GtpMovieSuggestions";
import GptSearchPage from "./GptSearchPage";
import { IMAGE_URL } from "../../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img className="absolute -z-20" src={IMAGE_URL} alt="logo" />
      <GptSearchPage />
      <GtpMovieSuggestions />
    </div>
  );
};

export default GptSearch;
