import { useReducer } from "react";
import TodoContext from "./TodoContext";
import { reducer, initialState } from "./reducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen bg-purple-100 flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl p-8">
          <h1 className="text-5xl font-bold text-center mb-8">
            My Todo List
          </h1>

          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;