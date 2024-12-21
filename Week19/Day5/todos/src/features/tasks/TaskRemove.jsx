import { useDispatch } from "react-redux";
import { remove } from "./state/slice";

const TaskRemove = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(remove(id))}>X</button>
    </>
  );
};
export default TaskRemove;
