import { onAuthStateChanged } from "firebase/auth";
import { useDispatch as UseDispatch } from "react-redux";
import Auth from "../firebase/firebase.init";
import { saveUser, toggleState } from "../redux/fetures/Auth/authSlice";
import { useEffect as UseEffect } from "react";

const user = () => {
  const dispatch = UseDispatch();
  UseEffect(() => {
    // auto dispatch login when user login firebase
    const unsubscribed = onAuthStateChanged(Auth, (user) => {
      if (user) {
        dispatch(saveUser(user.email));
      } else {
        dispatch(toggleState());
      }
    });

    return () => unsubscribed;
  }, [dispatch]);
};

export default user;
