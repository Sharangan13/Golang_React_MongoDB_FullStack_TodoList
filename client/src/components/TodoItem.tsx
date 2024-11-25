import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TodoItem = ({ todo, fetchTodos }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
      toast.success("Todo deleted!");
      fetchTodos();
    } catch (error) {
      toast.error("Failed to delete todo!");
    }
  };

  const handleToggle = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/todos/${todo._id}`, {
        completed: !todo.completed,
      });
      toast.success("Todo updated!");
      fetchTodos();
    } catch (error) {
      toast.error("Failed to update todo!");
    }
  };

  return (
    <div className={`card mb-3 ${todo.completed ? 'bg-light border-success' : 'border-primary'}`}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input me-3"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <span
            className={`fw-bold ${todo.completed ? "text-decoration-line-through text-dark" : "text-dark"}`}
          >
            {todo.body}
          </span>

          
        </div>
        <div className="d-flex">
        <span
            className={`fw-bold  ${todo.completed ? "text-success" : "text-warning"}`}
          >
           {todo.completed ? "Completed" : "In Progress"} 
          </span>
        <button
          className="btn btn-sm btn-outline-danger ms-3"
          onClick={handleDelete}
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
