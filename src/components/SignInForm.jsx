import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormInput from './FormInput'
import Button, { button_types } from './Button'
import { SignUpContainer, ButtonsContainer } from '../styles/account-login.styles'
import { googleSignInStart, emailSignInStart } from '../store/user/user.action'

const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const dispatch = useDispatch()
    const [formFields, setFormFieds] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFieds(defaultFormFields)
    }
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            dispatch(emailSignInStart(email, password))
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
        <SignUpContainer>
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
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button"
                    buttonType={button_types.google}
                    onClick={signInWithGoogle}
                    >Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInForm