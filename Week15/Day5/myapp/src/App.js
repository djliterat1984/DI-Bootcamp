import './App.css';
import Hello from './Hello.js'
import User from "./User.js";
import users from './users.json'

function App() {
  return (
    <div className="App">        
      { users.map( item => {
        return <User info={item}/>
      } ) }
    </div>
  );
}

export default App;
