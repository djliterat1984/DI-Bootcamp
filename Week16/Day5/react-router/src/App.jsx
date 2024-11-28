import Products from './components/Products'
import Product from './components/Product'
import './App.css'

import {Routes, Route, Link} from 'react-router-dom'


function App() {

  return (
    <>
      <header>
        <nav>
          {/* <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/product'>Product</Link> */}
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/all/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
