import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import {
getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore'

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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

  const db = getFirestore();
  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
   ) => {

    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date()
        console.log('<!--This is called', additionalInformation);
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }

    }

    return userDocRef
    
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }