import { useReducer } from "react";

const initialState = {
  counterA: 0,
  counterB: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_A":
      return {
        counterA: state.counterA + 1,
      };

    case "DECREMENT_A":
      return {
        counterA: state.counterA - 1,
      };

    case "INCREMENT_B":
      return {
        counterB: state.counterB + 1,
      };

    case "DECREMENT_B":
      return {
        counterB: state.counterB - 1,
      };

    case "RESET_ALL":
      return initialState;

    default:
      return state;
  }
}

function DoubleCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      <div>
        <h2>Counter A: {state.counterA}</h2>

        <button onClick={() => dispatch({ type: "INCREMENT_A" })}>
          Increment A
        </button>

        <button
            onClick={() => dispatch({ type: "DECREMENT_A" })}
            disabled={state.counterA === 0}
            >
            Decrement A
        </button>
      </div>

     

      <div>
        <h2>Counter B: {state.counterB}</h2>

        <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
          Increment B
        </button>

        <button
            onClick={() => dispatch({ type: "DECREMENT_B" })}
            disabled={state.counterB === 0}
            >
            Decrement B
        </button>
      </div>

  

      <button onClick={() => dispatch({ type: "RESET_ALL" })}>
        Reset All
      </button>
    </div>
  );
}

export default DoubleCounter;




