import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzGjl-7k9GxLAkF-xE56rvvhGyknw_teM",
  authDomain: "skipper-otto-2022.firebaseapp.com",
  projectId: "skipper-otto-2022",
  storageBucket: "skipper-otto-2022.appspot.com",
  messagingSenderId: "362602813064",
  appId: "1:362602813064:web:f78e33d3e5f382b0e1b13d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
