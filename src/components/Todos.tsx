import { Todo } from "../App";

interface Props {
    todos: Todo[];
    toggletodo : (selectTodo: Todo) => void;
    removeTodo : (selectTodo: Todo) => void;
}
const Todos = ({todos, toggletodo, removeTodo}:Props) => {
  return (
    <>
      {
          todos.map((todo) => (
            <>
              <div key={todo.text}>
                <input type="checkbox" id={todo.text} value="second_checkbox" checked={todo.done} onChange={() => toggletodo(todo)} />
                <label htmlFor={todo.text}>{todo.text}</label>
              </div>
              <button onClick={()=>removeTodo(todo)}>
                delete
              </button>
            </>
          ))
        }
    </>
  )
}

export default Todos
