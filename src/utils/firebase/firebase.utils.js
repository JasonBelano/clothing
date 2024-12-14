import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore'
import { useRef } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvp6TubzH1AHgtkyUgDCVeKahPS-Xh3Wo",
    authDomain: "crwn-clothing-db-9e9e7.firebaseapp.com",
    projectId: "crwn-clothing-db-9e9e7",
    storageBucket: "crwn-clothing-db-9e9e7.firebasestorage.app",
    messagingSenderId: "347333014816",
    appId: "1:347333014816:web:0f4fc9f9b078479723d345"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth
        const createdAt = Date.now()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef
    
  }