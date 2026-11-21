/**
 * Firebase Configuration & Initialization
 * 
 * Supports both Live Firebase credentials and Automatic Demo/Local Storage Fallback.
 * When Firebase credentials are not yet configured in window.FIREBASE_CONFIG,
 * the application automatically operates in local persistent mode using localStorage!
 */

window.FIREBASE_CONFIG = window.FIREBASE_CONFIG || {
  apiKey: "AIzaSyDummyKey-CDPTMS-Ghana",
  authDomain: "community-tracker-ghana.firebaseapp.com",
  projectId: "community-tracker-ghana",
  storageBucket: "community-tracker-ghana.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Check if Firebase SDK is loaded via CDN scripts
const isFirebaseAvailable = typeof firebase !== 'undefined' && firebase.apps;

if (isFirebaseAvailable) {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(window.FIREBASE_CONFIG);
      console.log('Firebase initialized successfully in CD-PTMS.');
    }
  } catch (error) {
    console.warn('Firebase initialization notice:', error.message);
  }
} else {
  console.log('Running in browser-native storage mode (Direct Live Server ready).');
}

