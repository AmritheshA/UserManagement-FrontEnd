import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQiem7cWwUNjkXw9tTUezY3jEOwbo8b_s",
  authDomain: "user-management-app-96478.firebaseapp.com",
  projectId: "user-management-app-96478",
  storageBucket: "user-management-app-96478.appspot.com",
  messagingSenderId: "188618001246",
  appId: "1:188618001246:web:29e3b642a66be69fd39dcf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

