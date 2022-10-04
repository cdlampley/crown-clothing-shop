import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import CartIcon from '../CartIcon'
import CartDropDown from '../CartDropDown'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart-dropdown-toggle.context'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo className='logo' />
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    { currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            SIGN OUT
                        </span> 
                        ) : (
                            <Link className="nav-link" to="/account-login">
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation