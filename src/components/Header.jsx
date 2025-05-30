import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/UserSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
    return() =>{
      unSubscribe();
    }
  }, []);

  return (
    <>
      <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <div>
          <img
            className="w-44"
            src={LOGO}
            alt="logo"
          />
        </div>
        {user && (
          <div className="text-white py-5 px-3 cursor-pointer">
            <div className="flex items-center">
              <div>
              <img
                className="w-10 h-10 object-fill rounded-full mr-1"
                src={user.photoURL}
                alt="Profile"
              />
                <div>{user.displayName}</div>
                </div>

              <div onClick={handleSignOut}>SignOut</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
