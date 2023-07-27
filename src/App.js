import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,  setStatus] = useState('all');
  const [filteredTodos, setFiltereredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
   }, [todos, status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFiltereredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFiltereredTodos(todos.filter(todo =>!todo.completed));
        break;
      default:
        setFiltereredTodos(todos);
    }

  }
  return (   
    <div className="App">
      <h1>Lloyd's React</h1>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}  />
    </div>
  );
}

export default App;
