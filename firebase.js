import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClzkXRH_mOI-WyKvF7h3cSyQ-CLutaI7c",
  authDomain: "github-api-66ce7.firebaseapp.com",
  projectId: "github-api-66ce7",
  storageBucket: "github-api-66ce7.appspot.com",
  messagingSenderId: "708508000411",
  appId: "1:708508000411:web:47c652ef87701f9289e63e",
};
let app;
app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
