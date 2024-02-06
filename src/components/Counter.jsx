import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "../store/counterAction";
import CounterHeader from "./CounterHeader";

function Counter({ heading, description }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count;
  });
  return (
    <div>
      <CounterHeader heading={heading} description={description} />
      <button type="button" onClick={() => dispatch(increaseCounter())}>
        Increase
      </button>
      <button type="button" onClick={() => dispatch(decreaseCounter())}>
        Decrease
      </button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
