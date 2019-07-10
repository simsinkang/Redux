import React from 'react';
import '../assets/css/App.css';
import TodoList from '../containers/TodoList'
import ControllerButtons from '../components/ControllerButton';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoInput from '../containers/TodoInput'

const App =()=>(
  <div className="App">
    <TodoInput/>
    <TodoList/>
    <ControllerButtons/>
    <VisibleTodoList/>
  </div>
);

export default App;
