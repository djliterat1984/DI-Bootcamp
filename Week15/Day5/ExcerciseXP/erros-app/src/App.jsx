import './App.css'
import ErrorBoundary from './ErrorBoundary'
import BuggyCounter from './components/BuggyCounter.jsx'
import Child from './components/FavoriteColor.jsx'
import FavoriteColor from './components/FavoriteColor.jsx'

function App() {
   return (
     <div>
       {/* <FavoriteColor /> */ }
       <Child />
      <div className="box" >
        <p style={ { color: 'black' } }><b>Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.
        </b></p>
        <hr />
        
        <p style={ { color: 'black' } }>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p style={ { color: 'black' } }>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p style={ { color: 'black' } }>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
         <BuggyCounter />
      </div>
    </div>
  )
}

export default App
