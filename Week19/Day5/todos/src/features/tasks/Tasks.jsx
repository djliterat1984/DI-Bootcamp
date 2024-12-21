import TaskInput from "./TaskInput";
import TasksList from "./TasksList";
import "./css/tasks.css";

const Tasks = (props) => {
  return (
    <>
      <h2>Tasks:</h2>
      <TaskInput />
      <TasksList />
    </>
  );
};
export default Tasks;
