import React from 'react'
import './App.css';
import FormTodo from './components/FormTodo';
import Header from './components/Header';
import TaskList from './components/TaskList';




function App() {


  return (

    <div className="App">

      <Header />
      <FormTodo />
      <TaskList />

    </div>

  );
}

export default App;