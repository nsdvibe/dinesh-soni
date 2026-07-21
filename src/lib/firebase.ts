/* ==========================================================================
   Firebase (client) — lazily initialised so a missing config never crashes
   the static build. Values come from .env.local (see .env.example).
   ========================================================================== */
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** True only when the essential config is present. */
export function isFirebaseConfigured(): boolean {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
}

let cachedDb: Firestore | null = null;

/** Returns a Firestore instance, or null if Firebase isn't configured yet. */
export function getDb(): Firestore | null {
  if (!isFirebaseConfigured()) return null;
  if (cachedDb) return cachedDb;
  const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
  cachedDb = getFirestore(app);
  return cachedDb;
}

/** Optional Web3Forms access key for email alerts (activate by pasting a key). */
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
