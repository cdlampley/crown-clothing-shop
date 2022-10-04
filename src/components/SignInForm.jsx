import { useState, useContext } from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase.utils'
import FormInput from './FormInput'
import Button from './Button'
import { UserContext } from '../context/user.context'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFieds] = useState(defaultFormFields)
    const { email, password } = formFields

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFieds(defaultFormFields)
    }
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email,
                password
            )
            setCurrentUser(user)

            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Cannot login, wrong password given')
                    break
                
                case 'auth/user-not-found':
                    alert('Cannot login, user not found')
                    break

                default:
                    console.log('user creation encountered an error')
                    break
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFieds({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    required
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm