import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/userProfile";
import './App.css'
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    
			<div className='app'>
				<Navbar />
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
				<main className='container'>
					<Routes>
						<Route path='/' element={<><h2>Welcome to our App</h2></>} />
						<Route path='/login' element={<><Login /></>} />
						<Route path='/register' element={<><Register /></>} />
						<Route path='/dashboard' element={<><Dashboard /></>} />
            <Route path='/profile' element={ <><UserProfile /></> } />
            <Route path='/profile' element={<><ProtectedRoute /></>} />
					</Routes>
				</main>
			</div>

  )
}

export default App
