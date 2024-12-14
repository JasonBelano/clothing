import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        try {
            const {user} = await signInWithGooglePopup();
            createUserDocumentFromAuth(user)
          } catch (error) {
            if (error.code === "auth/popup-closed-by-user") {
              console.warn("Popup was closed by the user before completing the sign-in.");
            } else {
              console.error("Error during sign-in:", error);
            }
          }
    }
    return (
        <div>
              <h1>This is sign-in page!</h1>
              <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default SignIn