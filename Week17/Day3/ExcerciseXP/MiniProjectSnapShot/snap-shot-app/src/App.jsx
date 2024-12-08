import { useState } from 'react'
import './App.css'
import SnapShotGallery from './components/SnapShotGallery'
import { Routes, Route, Link,useNavigate } from 'react-router-dom'

function App () {
  
  // const [ userType, setUserType ] = useState( '' )
  const navigate = useNavigate();
  let category = '';

  const onSearch = () => {
    const category = document.getElementById( 'search_field' ).value;
    console.log(category);
    
    if ( category != '' ) {
      console.log(category);
      
      navigate( '/search/'+ category );
    }
  };
  
  return (
    <>
      <header style={{position:'absolute', top:50, left:'45%', width:'10%'}}>
        <nav style={ { display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center' } }>
          <div style={ { display:'flex'} }>
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Enter Product Name ..."
            />
          <Link to={`/search/${category}`}>
            <button onClick={() => onSearch()} style={ { backgroundColor: 'black' } } id="search_btn" className="btn" value='Search'>Search</button>
          </Link>
          </div>
          <div style={{width:500, marginBottom:15}} >
            <Link style={{margin:20}} to="/">Mountains</Link>
            <Link style={{margin:20}} to="/beach">Beachs</Link>
            <Link style={{margin:20}} to='/birds'>Birds</Link>
            <Link style={ { margin: 20 } } to='/foods'>Foods</Link>
          </div>
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<SnapShotGallery type='mountains' />} />
        <Route path='/beach' element={ <SnapShotGallery type='beach'/> } />
        <Route path='/birds' element={ <SnapShotGallery type='birds'/> } />
        <Route path='/foods' element={ <SnapShotGallery type='foods'/> } />
        <Route path={`/search/${category}`} element={ <SnapShotGallery type={ category } />} />
      </Routes>
    </>
  )
}

export default App
