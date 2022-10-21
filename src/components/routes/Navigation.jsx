import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartIcon from '../CartIcon'
import CartDropDown from '../CartDropDown'
import { selectIsCartOpen } from '../../store/cart/cart.selector' 
import { selectCurrentUser } from '../../store/user/user.selector'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutStart } from '../../store/user/user.action'
import { 
    NavigationContainer, 
    LogoContainer, 
    NavLinks, 
    NavLink 
} from '../../styles/navigation.styles'

const Navigation = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

const signOutUser = () => dispatch(signOutStart())

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