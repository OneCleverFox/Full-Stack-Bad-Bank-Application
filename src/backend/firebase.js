import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import dotenv from 'dotenv';
dotenv.config();

// Firebase-Konfigurationsdaten
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentifizierung und Firestore verwenden
const auth = firebase.auth();
const firestore = firebase.firestore();

// Beispiel zur Erstellung eines Benutzerkontos
const email = 'benutzer@example.com'; // Ersetzen Sie dies durch die E-Mail-Adresse des Benutzers
const password = 'Passwort123'; // Ersetzen Sie dies durch das Passwort des Benutzers

auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Benutzerkonto erfolgreich erstellt
    const user = userCredential.user;
    // Weitere Benutzerdaten speichern, z.B. in Firestore
    // user.uid enthält die eindeutige Benutzer-ID
  })
  .catch((error) => {
    // Fehler bei der Erstellung des Benutzerkontos
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// Der Rest Ihres Firebase-Codes bleibt unverändert
const user = auth.currentUser;
if (user) {
  firestore.collection('users').doc(user.uid).get()
    .then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        // userData enthält die Benutzerdaten
      } else {
        // Das Dokument existiert nicht
      }
    })
    .catch((error) => {
      // Fehler beim Abrufen der Daten
    });
}
