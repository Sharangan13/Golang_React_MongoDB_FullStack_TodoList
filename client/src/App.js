import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";



const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      setTodos(response.data);
      console.log("response ",response)
    } catch (error) {
      toast.error("Failed to fetch todos!");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App container p-4 mt-2">
      <h1>Todo List Golang - with React</h1>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
      <ToastContainer />
    </div>
  );
};

export default App;
