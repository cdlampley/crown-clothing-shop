import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import CartIcon from '../CartIcon'
import CartDropDown from '../CartDropDown'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from '../../styles/navigation.styles'


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    { currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink> 
                        ) : (
                            <NavLink to="/account-login">
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>

    )
}

export default Navigation