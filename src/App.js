import {Routes, Route} from 'react-router-dom'
import Navigation from './components/routes/Navigation'
import Home from './components/routes/Home'
import SignIn from './components/routes/SignIn'
import './app.scss'

const Shop = () => {
  return(
    <div>
      <h1>Shop Here</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>

  )
}

export default App;
