import React, { useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "운동하기",
      checked: true
    },
    {
      id: 2,
      text: "요리하기",
      checked: true
    },
    {
      id: 3,
      text: "학원가기",
      checked: false
    }
  ]);
  return (
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
  );
}

export default App;