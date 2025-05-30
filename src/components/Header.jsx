import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/UserSlice";

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
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <>
      <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <div>
          <img
            className="w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
