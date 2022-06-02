import TodoItem from './TodoItem'
import React from 'react'

const TodoList = ({ todos, removeTodo, toggleTodoComplete}) => {
  return (
    <ul>
      {todos.map(todo => 
        <TodoItem key={todo.id}
        removeTodo={removeTodo}
        toggleTodoComplete={toggleTodoComplete}
        {...todo}
        />
      )}
    </ul>
  )
}

export default TodoList