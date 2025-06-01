import React from "react";
import { lang } from "../../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchPage = () => {
  const langKey = useSelector((store)=>store.multiLanguage.language)
    
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input 
        className="col-span-9 my-3 mx-2 bg-white p-1 pl-3 text-[14px]" 
        type="text" 
        placeholder={lang[langKey].SearchInput}
        />
        <button 
        className="bg-red-700 text-white py-1 px-2 rounded-lg col-span-3 my-3 mx-2">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;
