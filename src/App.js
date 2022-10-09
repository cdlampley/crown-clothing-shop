import {Routes, Route} from 'react-router-dom'
import Navigation from './components/routes/Navigation'
import Home from './components/routes/Home'
import AccountLogin from './components/routes/AccountLogin'
import Shop from './components/routes/Shop'
import Checkout from './components/routes/Checkout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='account-login' element={<AccountLogin />} />
      </Route>
    </Routes>

  )
}

export default App;
