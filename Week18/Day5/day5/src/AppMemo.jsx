import { useState, useCallback, useMemo } from "react";
import ToDo from "./components/ToDo";

const AppMemo = () => {
  const [count, setCount] = useState(0);
  const [ todos, setTodos ] = useState( [] );
  
  const expensiveCalculation = ( num = 0 ) => {
    for (let i = 0; i < 100000000; i++) {
      num++
    }
    return num;
  }
  
  // const sum = expensiveCalculation( 0 );
  // console.log(sum);
  // minuto 38
  
  const sum = useMemo( () => {
    const result = expensiveCalculation( 0 );
    console.log(result);
    return result;
  },[])
  const addTask = useCallback(()=> {
    setTodos(todos => [...todos, 'new task'])
  }, [] )

  return (
    <>
      <h2>memo, useCallback, useMemo</h2>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          count:{count}
        </button>
      </div>
      <ToDo todos={todos} addTask={addTask}/>
    </>
  );
};
export default AppMemo;

