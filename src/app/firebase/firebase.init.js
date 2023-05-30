import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export default Auth;
