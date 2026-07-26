import { useReducer } from "react";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {

    dispatch({
      type: "RESET_FORM",
    });
  };

  return (
    <div>
      <h2>Multi-Step Registration Form</h2>

      <h3>Step {state.step} of 3</h3>

    
      {state.step === 1 && (
        <>
          <input
            type="text"
            placeholder="First Name"
            value={state.firstName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "firstName",
                value: e.target.value,
              })
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Last Name"
            value={state.lastName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "lastName",
                value: e.target.value,
              })
            }
          />

          <br />
          <br />

          <button
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            disabled={!state.firstName || !state.lastName}
          >
            Next
          </button>
        </>
      )}

      
      {state.step === 2 && (
        <>
          <input
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Phone"
            value={state.phone}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "phone",
                value: e.target.value,
              })
            }
          />

          <br />
          <br />

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Back
          </button>

          <button
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            disabled={!state.email || !state.phone}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </>
      )}

      
      {state.step === 3 && (
        <>
          <h3>Review Information</h3>

          <p>
            <strong>First Name:</strong> {state.firstName}
          </p>

          <p>
            <strong>Last Name:</strong> {state.lastName}
          </p>

          <p>
            <strong>Email:</strong> {state.email}
          </p>

          <p>
            <strong>Phone:</strong> {state.phone}
          </p>

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Back
          </button>

          <button
            onClick={handleSubmit}
            style={{ marginLeft: "10px" }}
          >
            Confirm
          </button>

          <button
            onClick={() => dispatch({ type: "RESET_FORM" })}
            style={{ marginLeft: "10px" }}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;