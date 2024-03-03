// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTMWj42ViuVkApfsJIBQTk-0j4bvKlrKQ",
  authDomain: "zacharymeyerdev.firebaseapp.com",
  projectId: "zacharymeyerdev",
  storageBucket: "zacharymeyerdev.appspot.com",
  messagingSenderId: "636420746743",
  appId: "1:636420746743:web:c578fa007ebabfcc3792f2",
  measurementId: "G-H9EDQCSBT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Document Ready
document.addEventListener('DOMContentLoaded', function () {
    // Responsive navigation menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Additional JavaScript can be added here for more interactivity
    // For example, form validation, animations, etc.
});
