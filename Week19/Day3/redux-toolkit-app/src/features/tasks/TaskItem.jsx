import TaskRemove from "./TaskRemove";
import { useDispatch } from "react-redux";
import { active } from "./state/slice";
const TaskItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(active(item.id))}
        className={item.active ? "" : "active"}
      >
        {item.task} {item.duedate}
        <TaskRemove id={item.id} />
      </div>
    </>
  );
};
export default TaskItem;
