import './App.css';
import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise from './Exercise3';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

const drinks = ['coffee', 'tea', 'milk']

function App() {
  return (
    <>
      <p>Hello world</p>
      { myelement }
      "React is { sum } times better with JSX"
      <h3>{user.firstName}</h3>
      <h3>{ user.lastName }</h3>
      <UserFavoriteAnimals animals={ user.favAnimals } />
      <Exercise drinks={drinks} />
    </>
  );
}

export default App;
