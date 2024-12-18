import { useState,createContext, useReducer } from 'react'
import { AddTask } from './components/AddTask';
import { DisplayTasks } from './components/DisplayTasks';
import {FilterTask} from './components/FilterTask'
import { taskReducer } from './reducer/taskReducer';

import './App.css';

export const AppContext = createContext();

function App() {
  const [ state, dispatch ] = useReducer( taskReducer, {tasks:[ {id: 0, text:'Task 0', completed:false} ],filteredTasks:[] })

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <div style={{width:'100vh', height:'70vh'}}>

        <AddTask />
        <DisplayTasks />
      </div>
    </AppContext.Provider>
  )
}

export default App
