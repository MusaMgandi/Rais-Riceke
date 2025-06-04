import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_8UPBHHSe40cmP2yVKWrK6nSMEgbYeDA",
    authDomain: "rais-ke.firebaseapp.com",
    databaseURL: "https://rais-ke-default-rtdb.firebaseio.com",
    projectId: "rais-ke",
    storageBucket: "rais-ke.firebasestorage.app",
    messagingSenderId: "1033688342928",
    appId: "1:1033688342928:web:2fe022331798ab62729315",
    measurementId: "G-99PHQ3GH4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Handle auth state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is signed in:', user.email);
    } else {
        console.log('User is signed out');
    }
});

// Export the initialized services
export { auth, db, storage };
