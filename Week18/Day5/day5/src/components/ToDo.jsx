import { memo } from "react";
const ToDo = ({ todos, addTask}) => {
  console.log("render todo...", todos);
  return (
    <>
      <h2>Todos:</h2>
       <button onClick={addTask}>Add Task</button>
      {todos.map((task, indx) => {
        return (
          <div key={indx}>
            {indx} {task}
          </div>
        );
      })}
    </>
  );
};
export default memo(ToDo);
