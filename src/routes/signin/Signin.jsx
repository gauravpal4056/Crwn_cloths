import {  signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.util"
import SigninForm from "../../components/sign-up-form/Sign-up.component"


const Signin = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocFromAuth(user);
    }


    return(
        <div>
            <h1>sign in</h1>
            <button onClick={logGoogleUser} >signin</button>
            <SigninForm />
        </div>
    )
}

export default Signin