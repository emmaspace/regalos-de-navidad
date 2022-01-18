import {
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import auth from "./firebase-config";

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      return errorCode;
    });
};

export const updateUser = (name) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
  })
    .then(() => {})
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const logIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      return errorCode;
    });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("User's logged out");
    })
    .catch((error) => {
      console.log(error);
    });
};
