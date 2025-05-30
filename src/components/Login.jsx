import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState('');

  const fullName = useRef();
  const email = useRef();
  const password = useRef();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormData = () => {
    const Message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(Message);

    if (Message.email && Message.password) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL:
              "https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/Imageis4q-1685411814330.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75",
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
            })
            .catch((error) => {
            });

          // Signed up

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("SIGN IN");
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInError(errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="logo"
        />
      </div>
      <div className="bg-gray-900 w-4/12 absolute right-0 left-0   my-12 mx-auto">
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
          className="py-12 px-12"
        >
          <h1 className="text-white font-600 text-3xl py-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <>
              <input
                ref={fullName}
                className="bg-black text-white py-2 px-4 my-4 w-full"
                type="text"
                placeholder="Full Name"
              />
              {/* {errorMessage.fullName && (<p>{errorMessage.fullName}</p>)} */}
            </>
          )}

          <input
            ref={email}
            className="bg-gray-700 text-white py-2 px-4 my-4 w-full"
            type="text"
            placeholder="Email"
          />

          {errorMessage.email && (
            <p className="text-white">{errorMessage.email}</p>
          )}

          <input
            ref={password}
            className="bg-gray-700 text-white py-2 px-4 my-4 w-full"
            type="text"
            placeholder="Password"
          />
          {errorMessage.password && (
            <p className="text-white">{errorMessage.password}</p>
          )}

          {signInError && (
            <p className="text-white">Credentials are Not Valid</p>
          )}

          <button
            className="bg-red-800 text-white p-2 my-4 w-full rounded-lg"
            type="submit"
            onClick={handleFormData}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-white" onClick={toggleForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
