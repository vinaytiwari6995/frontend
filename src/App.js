import './App.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Register from './Register/Register';
import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);

  const [newTodo, setNewTodo] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((success) => {
      setTodoList(success.data);
    })
  }, [])

  const submitTodo = () => {

    Axios.post('http://localhost:3001/api/insert', {
      todoName: todoName
    });

    setTodoList([...todoList, { todoName: todoName }]);
  };


  const deleteReview = (id, todo) => {
    Axios.delete(`http://localhost:3001/api/delete/${todo}`);
  };

  const updateReview = (id, todo) => {
    //console.log(id);
    //console.log(todo);
    Axios.put("http://localhost:3001/api/update", {
      id: id,
      newTodo: todo,

    });
    setNewTodo("");
  };

  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
          <Link className="btn btn-outline-success me-2" type="button" to="/Login">Login</Link>
          <Link className="btn btn-outline-success me-2" type="button" to="/Register">Register</Link>
        </form>
      </nav>
      <Routes>
          <Route exact path="/Register" element= {<Register />}>            
          </Route>
          <Route exact path="/Login" element= {<Login />}>            
          </Route>
      </Routes>
        <br></br>
      
      <div name="To Do UI">
        <h1>TO DO LIST</h1>
        <div className="container mb-3">
          <label className="form-label">Add ToDo</label>
          <input type="text" className="form-control" onChange={(e) => {
            setTodoName(e.target.value)
          }} name='todoName' id="formGroupExampleInput" placeholder="Add New Todo" /><br />
          <button type="button" className="btn btn-primary" onClick={submitTodo}>Submit</button>

          {todoList.map((val) => {
            return <>
              <h1> </h1>
              <div className="input-group">
                <input type="text" className="form-control" value={val.todoName} disabled={true} />
                <input type="text" className="form-control" onChange={(e) => {
                  setNewTodo(e.target.value)
                }} />
                <button className="btn btn-outline-secondary" type="button" onClick={() => { updateReview(val.id, newTodo) }}>Update</button>
                <button className="btn btn-outline-secondary" onClick={() => { deleteReview(val.todoName, val.id) }} type="button">Delete</button>
              </div>
            </>

          })}
        </div>
      </div>

    </div>
    </Router>
  );
}

export default App;
