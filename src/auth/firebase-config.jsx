import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  /* apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID, */
  apiKey: "AIzaSyD7TzEd0sGb_emwnEmxTcPGabFnNNuX1qc",
  authDomain: "regalos-navidad.firebaseapp.com",
  projectId: "regalos-navidad",
  storageBucket: "regalos-navidad.appspot.com",
  messagingSenderId: "715156937802",
  appId: "1:715156937802:web:2c31da3af4a0ce20aadab3",
  measurementId: "G-9GSH0MP2J1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;