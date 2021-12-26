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

  // Register new user using email and password
  const registerUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Set user to user store
        const newUser = { email, displayName: name };
        dispatch(
          setUser({
            email,
            displayName: name,
            photoURL: "",
          })
        );
        // Send User data to server

        // Set user to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {})
      .finally(() => {});
  };

  //   Login with Google
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result.user);
        const user = result.user;
        // Set user info to store
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
        dispatch(
          setUser({})
        );
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
