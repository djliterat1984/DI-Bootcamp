import { useSelector, useDispatch } from "react-redux";
import { add, delay2sec, fetchUsers } from "./state/slice";
import { useEffect } from "react";

const Counter = (props) => {
  const count = useSelector((state) => state.counterReducer.count);
  const users = useSelector((state) => state.counterReducer.users);
  const status = useSelector((state) => state.counterReducer.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const addCount = () => {
    // setTimeout(() => {
    dispatch(add());
    // }, 2500)
  };

  if(status ==='loading') return <h2>Loading users...</h2>

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => addCount()}>Add</button>
      <button onClick={() => dispatch(delay2sec())}>Delay 2.5 sec</button>
      {users.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};
export default Counter;
