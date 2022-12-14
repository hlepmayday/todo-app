import React from 'react'
import TodoListItem from './TodoListItem'
import '../styles/TodoList.scss'

function TodoList({todos}) {
  // console.log(props);
  // const {todos} = props;
  return (
    <div className='TodoList'>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList