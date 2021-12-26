import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { setUser } from "../store/user";

initializeAuthentication();

const useFirebase = () => {
  //   const [user, setUser] = useState({});
  const dispatch = useDispatch();

  //   Get user info from Store (user)
  const user = useSelector((state) => state.entities.user);

  const auth = getAuth();

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
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Observing user state
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         setUser(user);
  //       } else {
  //       }
  //     });
  //     return () => unsubscribe;
  //   }, [auth]);

  return {
    user,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
