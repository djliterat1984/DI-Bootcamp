import logo from './logo.svg';
import './App.css';
import posts from './posts.json'
import Post from './Post.js';

function App() {
  return (
    <div className="App">
      { posts.map( (item,index) => {
        return <Post title={ item.title } body={ item.body } key={index} />
      } ) }
    </div>
  );
}

export default App;
