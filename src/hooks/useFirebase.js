import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import {
  checkAdminStatus,
  saveUserToDB,
  setAuthError,
  setLoading,
  setUser,
  upsertUser,
} from "../store/user";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  //   Get info from Store (user)
  const user = useSelector((state) => state.entities.user.userInfo);
  const authError = useSelector((state) => state.entities.user.error);
  const loading = useSelector((state) => state.entities.user.loading);
  const admin = useSelector((state) => state.entities.user.admin);

  // Register new user
  const registerUser = (name, email, password, navigate, location) => {
    dispatch(setLoading({ loading: true }));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        dispatch(setAuthError({ error: "" }));

        // Save user data to Database
        dispatch(saveUserToDB({ name, email }));

        // Update user name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            dispatch(setAuthError({ error: "" }));
            // Redirect user to the page where they come from
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
          })
          .catch((error) => {
            dispatch(setAuthError({ error: error.message }));
          });
      })
      .catch((error) => {
        dispatch(setAuthError({ error: error.message }));
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  };

  // Login with email and password
  const loginWithEmailAndPassword = (email, password, navigate, location) => {
    dispatch(setLoading({ loading: true }));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        dispatch(setAuthError({ error: "" }));
        // Redirect user to the page where they come from
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        dispatch(setAuthError({ error: error.message }));
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  };

  //   Login with Google
  const signInWithGoogle = (navigate, location) => {
    dispatch(setLoading({ loading: true }));
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        dispatch(
          setUser({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );

        // Upsert user data to database
        dispatch(upsertUser({ name: user.displayName, email: user.email }));

        // Empty error for succfully login
        dispatch(setAuthError({ error: "" }));

        // Redirect user to the page where they come from
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        dispatch(setAuthError({ error: error.message }));
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
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

  // Check whether user role is admin or not
  dispatch(checkAdminStatus(user.email));

  return {
    user,
    authError,
    loading,
    admin,
    signInWithGoogle,
    logOut,
    registerUser,
    loginWithEmailAndPassword,
    
  };
};

export default useFirebase;
