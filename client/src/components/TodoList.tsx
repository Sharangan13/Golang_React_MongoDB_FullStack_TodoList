import React from "react";
import TodoItem from "./TodoItem.tsx";

const TodoList = ({ todos, fetchTodos }) => {
   const todoList = todos || [];

  return (
    <div className="container mt-4">
      <h5 className="text-center mb-3">Your Todos</h5>


      {todoList.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          No todos available. Add some todos to get started!
        </div>
      ) : (
        <div className="row col-12 ">
          {todoList.map((todo) => (
            <div key={todo._id} className="col-12">
              <TodoItem todo={todo} fetchTodos={fetchTodos} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
