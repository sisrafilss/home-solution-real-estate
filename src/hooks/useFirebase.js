import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { setUser } from "../store/user";

initializeAuthentication();

const useFirebase = () => {
  const dispatch = useDispatch();
  //   Get user info from Store (user)
  const user = useSelector((state) => state.entities.user);
  const auth = getAuth();

  // Register new user
  const registerUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  //   Login with Google
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result.user);
        const user = result.user;
        // console.log(users.displayName);
        dispatch(
          setUser({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => {
        // dispatch(setUsers({}));
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Observing user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
      }
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    signInWithGoogle,
    logOut,
    registerUser,
  };
};

export default useFirebase;
