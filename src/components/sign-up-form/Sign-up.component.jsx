import {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/FormInput.component'
import './sign-up-form.styles.scss';
import Button from '../button/button.component'

const defaultField = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''

}


const SigninForm = () => {

    const [formFields, setFormFields] = useState(defaultField);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})

    }
    const resetField = () => {
        setFormFields(defaultField)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password!==confirmPassword) {
            alert("password does not match")
            return;   
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocFromAuth(user, {displayName})
            resetField();

        } catch(err){
            if(err.code==='auth/email-already-in-use')alert('email already exist')
            console.log("tthe error inn email" + err);
        }
    }
    const {displayName, email, password, confirmPassword} = formFields
    return (
        <div className = "sign-up-container">
            <h2>Don't have a account</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
            
                <FormInput 
                    label="Display Name"
                    name="displayName" 
                    value={displayName} 
                    onChange={handleChange}  
                />
                
                <FormInput 
                    label = "Email"
                    name="email" 
                    value={email} 
                    type="email" 
                    onChange={handleChange}
                    required
                />

                <FormInput 
                    label="Password"
                    name="password" 
                    type="password"
                    value={password}
                    onChange={handleChange} 
                />

                <FormInput 
                    label = "Confirm Password"
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange} 
                />
                <Button type="submit"> Sign In</Button>
            </form>
        </div>
    )
}
export default SigninForm;