import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { UP } from "./counterSlice";
/*
const initialState = { value: 0 };
function reducer(state, action) {
  if (action.type === "UP") {
    return { ...state, value: state.value + action.step };
  }
  return state;
}

const store = createStore(reducer, initialState);
*/
const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  return (
    <div>
      {value}
      <button
        onClick={() => {
          // dispatch({ type: "counterSlice/UP", step: 2 });
          dispatch(UP(2));
        }}
      >
        +
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
};

export default App;
