
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDZg5BK_ThbUuYNa9LKIfFp_wkHc-QfGM0",
  authDomain: "new-project-3c396.firebaseapp.com",
  projectId: "new-project-3c396",
  storageBucket: "new-project-3c396.appspot.com",
  messagingSenderId: "617827260910",
  appId: "1:617827260910:web:6ed28d0caf8a114a7196ff",
  measurementId: "G-4NXPR4YCVX"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
