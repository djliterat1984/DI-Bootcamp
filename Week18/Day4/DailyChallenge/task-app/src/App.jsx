import { useState,createContext, useReducer } from 'react'
import { AddTask } from './components/AddTask';
import { DisplayTasks } from './components/DisplayTasks';
import { taskReducer } from './reducer/taskReducer';

import './App.css';

export const AppContext = createContext();

function App() {
  const [ tasks, dispatch ] = useReducer( taskReducer, [ {id: 0, text:'Task 0', completed:false} ])

  return (
    <AppContext.Provider value={ { tasks, dispatch } }>
      <div style={{width:'100vh', height:'70vh'}}>
        <AddTask />
        <DisplayTasks />
      </div>
    </AppContext.Provider>
  )
}

export default App
