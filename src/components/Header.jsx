import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/UserSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/store/GptSlice";
import { SUPPORT_LANGUAGES } from "../utils/constants";
import { preferLanguage } from "../utils/store/LangSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const search = useSelector((store)=>store.Gpt?.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    //executes when user sign up, sign in, sign out when ever authentication state change
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //signout
        dispatch(removeUser());
        navigate("/");
      }
    });

    //cleanup function
    // to avoid memory leaks
    // or freeup memory or
    // prevent bugs when component mounts
    return () => {
      unSubscribe();
    };
  }, []);

  const handleToggleGptSearch = () => {
    //toggle Gpt Search
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e)=> {
    //Dispatch the e.target.value
    dispatch(preferLanguage(e.target.value))
  }
 
  return (
    <>
      <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <div>
          <img className="w-44" src={LOGO} alt="logo" />
        </div>
        {user && (
          <div className="text-white py-5 px-3 cursor-pointer">
            <div className="flex items-center">
              {search &&
              (
                <div className="mr-4">
                <select onChange={handleLanguageChange}>
                  {SUPPORT_LANGUAGES.map((lang)=>{
                    return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                  })}
                  
                </select>
              </div>
              )}
              <div>
                <button
                  className="bg-purple-700 mr-2 px-2 py-2 rounded-lg"
                  onClick={handleToggleGptSearch}
                >
                  {search ? "Home Page" : "Gpt Search"}
                </button>
              </div>
              <div>
                <img
                  className="w-10 h-10 object-fill mr-2"
                  src={user.photoURL}
                  alt="User"
                />
              </div>

              <div
                className="bg-red-700 text-white py-2 px-3 rounded-lg"
                onClick={handleSignOut}
              >
                SignOut
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
