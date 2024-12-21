import { useDispatch } from "react-redux";
import { add } from "./state/slice";
import { useRef } from "react";

const TaskInput = (props) => {
  const inputRef = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();

  const addTask = () => {
    const value = inputRef.current?.value.trim();
    const date = dateRef.current?.value;
    if (value === "") return;
    dispatch(add({ value, date }));
    inputRef.current.value = "";
  };

  return (
    <>
      <input placeholder='Add task...' ref={inputRef} />
      <input type='date' ref={dateRef} />
      <button onClick={() => addTask()}>AddTask</button>
    </>
  );
};
export default TaskInput;
