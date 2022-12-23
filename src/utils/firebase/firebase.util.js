import { initializeApp } from 'firebase/app'
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
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAU00-_DBHBrGJDtfMjWscenAW2kQf97Y",
    authDomain: "crwn-fc4cd.firebaseapp.com",
    projectId: "crwn-fc4cd",
    storageBucket: "crwn-fc4cd.appspot.com",
    messagingSenderId: "84649322973",
    appId: "1:84649322973:web:fa0a6600e452cbdcacee34"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation={}) => {
    console.log("create user called");
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const createdAt = new Date();
        const {displayName, email} = userAuth;

            try{
                await setDoc(userDocRef,{
                        displayName,
                        email,
                        createdAt,
                        ...additionalInformation
                    })
                console.log("inserted user doc");
            }
            catch(err){
                console.log(err);
            }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email||!password)return;
    console.log(email + password);
    
    return await createUserWithEmailAndPassword(auth, email, password)
}

