import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

export async function register({ name, email, password }) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  if (name?.trim()) await updateProfile(credential.user, { displayName: name.trim() });
  return credential.user;
}

export async function login(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function logout() {
  await signOut(auth);
}

export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

export function requireAuth({ loginUrl = "auth/login.html" } = {}) {
  return watchAuth((user) => {
    if (!user) window.location.replace(loginUrl);
  });
}
