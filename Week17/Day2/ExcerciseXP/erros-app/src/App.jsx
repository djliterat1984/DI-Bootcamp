import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import {Routes, Route,NavLink } from "react-router-dom";
import { PostList } from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

export function HomeScreen() {
  return (
      <h1 style={{color:'black'}}>Home</h1>
  )
}

export function ProfileScreen() {
  return (
      <h1 style={{color:'black'}}>Profile</h1>
  )
}

export function ShopScreen () {
  throw new Error('Error Test')
}

const routes= (
  <Routes>
    <Route path='/' element={<HomeScreen />} />
    <Route path='/profile' element={<ProfileScreen />} />
    <Route path='/shop' element={<ShopScreen/>} />
  </Routes>
)


function NavBar () {
  return(
    <>
      <NavLink style={{color:'black'}} to='/' >Home</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/shop'>Shop</NavLink> 
    </>
)
}

const data = {
  key1: 'myusername',
  email: 'mymail@gmail.com',
  name: 'Isaac',
  lastname: 'Doe',
  age: 27
}

const webHookAsync = async () => {
  
  try {
    const response = await fetch( 'https://webhook.site/d44f9e51-ed8e-43ad-8595-d70ea4be79ff', {
      method: "POST",
      body: JSON.stringify( data ),
      headers: {
        'Content-Type': 'application/json',
      }
    } )
    console.log(response) 
  } catch (error) {
    console.log(error);
  }
}


function App () {
  
  return (
    <div>
      <NavBar />
      <ErrorBoundary>
        { routes }
      </ErrorBoundary>
      <h1>Posts</h1>
      <PostList />
      <h1>Example1</h1>
      <Example1 />
      <h1>Example2</h1>
      <Example2 />
      <h1>Example3</h1>
      <Example3 />
      <button style={{color:'white'}} onClick={() => webHookAsync()}>Get data</button>
    </div>
  )
}

export default App
