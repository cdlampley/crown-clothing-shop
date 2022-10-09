import SignUpForm from '../SignUpForm'
import SignInForm from '../SignInForm'
import { LoginContainer } from '../../styles/account-login.styles'


const AccountLogin = () => {

    return (
        <LoginContainer>
            <SignInForm />
            <SignUpForm />
        </LoginContainer>
    )
}

export default AccountLogin