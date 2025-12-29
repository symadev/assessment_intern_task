
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6OgP8RKnzaggHcy-y_dNGi9JAZXtoAes",
  authDomain: "product-login-aa664.firebaseapp.com",
  projectId: "product-login-aa664",
  storageBucket: "product-login-aa664.firebasestorage.app",
  messagingSenderId: "922587047476",
  appId: "1:922587047476:web:ca5de403caf491e2064c61"
};

const app = initializeApp(firebaseConfig);  // Initialize app first
export const auth = getAuth(app);  // Now you can use 'app' in getAuth
export { app };  // Optionally, export 'app' if you need to use it elsewhere
