
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBugMNlXQgqXoSXFu6YKnJ84EoE_kIPo5s",
  authDomain: "himnario-moravo-web.firebaseapp.com",
  projectId: "himnario-moravo-web",
  storageBucket: "himnario-moravo-web.appspot.com",
  messagingSenderId: "35762100541",
  appId: "1:35762100541:web:d1f58d187ed8743a218d54",
  measurementId: "G-ZQ47S969N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics