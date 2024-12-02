import { useState } from 'react';
import './App.css';
import LanguageComponent from './components/LanguageComponent';

function App () {
  const [languages, setLanguages] = useState([
  {name: "Php", votes: 0},
  {name: "Python", votes: 0},
  {name: "JavaSript", votes: 0},
  {name: "Java", votes: 0}
  ] )
  
  const handleVotes = ( index ) => {
    const items = [...languages];
    items[index] = {...languages[index], votes:languages[index].votes + 1};
    setLanguages( items );    
  }
  
  return (
    <div className="App">
      <h1>Vote your language</h1>
      { languages.map( ( item, index ) => {
        return(
          <LanguageComponent name={ item.name } votes={ item.votes } key={ index } position={index} handleVotes={ ( indexKey ) => handleVotes(indexKey) } />)
      } ) }
    </div>
  );
}

export default App;
