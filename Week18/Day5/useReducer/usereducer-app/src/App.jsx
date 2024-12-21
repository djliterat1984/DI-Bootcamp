import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialState = {
  count: 11
};

const countReducer = ( state, action ) => {
  console.log(action);
  if ( action.type === "INCREMENT" )
    return { ...state, count: state.count + action.num }
  else if ( action.type === "DECREMENT" )
    return {...state, count: state.count - action.num}
  return state
}

function App() {
  const [count, setCount] = useState(0)
  const [ countState, dispatch ] = useReducer(countReducer, initialState);
  
  return (
    <>
      <h2>useState</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>reducer count is: { countState.count }</h2>
        <button onClick={ () => dispatch( { type: "INCREMENT", num: 2 } ) }>Add</button>
        <button onClick={()=> dispatch({type:"DECREMENT", num:2})}>Minus</button>
      </div>
    </>
  )
}

export default App
