# Sun-sid Firebase Authentication

## Setup

1. Create/select a Firebase project and add a Web App.
2. Enable Authentication → Sign-in method → Email/Password.
3. Copy the Web App configuration into `firebase-config.js`.
4. Create Firestore if you want to persist user/Kundali data.
5. Apply `firestore.rules`.

Never commit a Firebase Admin SDK service-account JSON/private key.

## Flow

- Register: `createUserWithEmailAndPassword`
- Login: `signInWithEmailAndPassword`
- Auth state: `onAuthStateChanged`
- Protected Kundali page: redirects unauthenticated users to `auth/login.html`
- Logout: `signOut`

Firebase manages the client authentication session and token refresh. Application data should be owned by Firebase Auth `uid`, not by email.

## Data model

`users/{uid}`

`kundalis/{kundaliId}` with a `userId` field equal to the authenticated user's UID.

The supplied Firestore rules enforce per-user ownership.
