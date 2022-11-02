import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/routes/Navigation'
import Home from './components/routes/Home'
import AccountLogin from './components/routes/AccountLogin'
import Shop from './components/routes/Shop'
import { checkUserSession } from './store/user/user.action'
import ShoppingBag from './components/routes/ShoppingBag'
import Checkout from './components/routes/Checkout'
import { GlobalStyle } from './styles/global.styles'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  },)

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='account-login' element={<AccountLogin />} />
          <Route path='shopping-bag' element={<ShoppingBag />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>


  )
}

export default App;
