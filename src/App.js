import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { 
  onAuthStateChangedListener, 
  createUserDocumentFromAuth 
} from './utils/firebase/firebase.utils'
import Navigation from './components/routes/Navigation'
import Home from './components/routes/Home'
import AccountLogin from './components/routes/AccountLogin'
import Shop from './components/routes/Shop'
import Checkout from './components/routes/Checkout'
import { setCurrentUser } from './store/user/user.action'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user))
    })

    return unsubscribe
  },)

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='account-login' element={<AccountLogin />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>

  )
}

export default App;
