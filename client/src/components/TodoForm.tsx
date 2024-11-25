import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TodoForm = ({ fetchTodos }) => {
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!body) {
      toast.error("Todo body cannot be empty!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/todos", { body, completed: false });
      toast.success("Todo added!");
      setBody("");
      fetchTodos();
    } catch (error) {
      toast.error("Failed to add todo!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Add a New Todo</h5>
          <form onSubmit={handleSubmit}>
            <div className="row g-2">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Enter a todo..."
                />
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-primary shadow w-100">
                  Add Todo
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
