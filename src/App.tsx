import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Todos from './components/Todos';


export interface Todo {
  text: string;
  done: boolean;
}
const initialTodos = [
  {
    text: "Learn React",
    done: true
  },
  {
    text: "Learn Typescript",
    done: false
  }
]
function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      done: false,
    }
    setTodos([...todos, newTodo])
  }
  const toggletodo = (selectTodo: Todo) => {
    setTodos(prevTodos => {
      return prevTodos.map((todo) => {
        if (todo === selectTodo) {
          return {
            ...todo,
            done: !todo.done,
          }
        }
        return todo;
      }
      )
    })
  }

  const removeTodo = (selectTodo: Todo) => {
    setTodos(prevTodos => {
      return prevTodos.filter((todo) => todo != selectTodo);
    })
  }
  return (
    <>
      <h1>Todo</h1>
      <Form addTodo={addTodo} />
      <Todos todos={todos} toggletodo={toggletodo} removeTodo={removeTodo} />
    </>
  )
}

export default App
