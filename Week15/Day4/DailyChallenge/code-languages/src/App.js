// Steps
// In the App.js create an array of objects in the state. Each object contains the language and the number of votes per language.
// Use the below object as a starting point:

// const [languages, setLanguages] = useState([
//                                             {name: "Php", votes: 0},
//                                             {name: "Python", votes: 0},
//                                             {name: "JavaSript", votes: 0},
//                                             {name: "Java", votes: 0}
                                          // ])

// Create a function that increases the state of the votes by one, when you click on a specific language button.

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
