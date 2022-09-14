import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDn9UvLvaR6O-xCKj7mfRroswp2I6aJhok",
  authDomain: "yanagawa-hp.firebaseapp.com",
  projectId: "yanagawa-hp",
  storageBucket: "yanagawa-hp.appspot.com",
  messagingSenderId: "386197717483",
  appId: "1:386197717483:web:5f90314d33fa95d3a459ae",
};

export const firebaseApp = initializeApp(firebaseConfig);
