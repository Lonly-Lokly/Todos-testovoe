import React from "react";
import useInputValue from "./hooks/useInputValue";
import useTodos from "./hooks/useTodos";
import useAddTodos from "./hooks/useAddTodos";
import type { Todo } from "./types";
import TaskCounter from "./components/TaskCounter";
import "./App.scss";

const App: React.FC = () => {
  const { value, onChange, reset } = useInputValue("");
  const { todos, toggleComplete, addTodo, setFilter, clearAllTodos } =
    useTodos();
  const addTodoHandler = useAddTodos(addTodo);

  const handleSaveInput = () => {
    addTodoHandler(value);
    reset();
  };

  return (
    <section className="todos">
      <div className="container">
        <div className="todo-content">
          <header className="header">
            <div className="header-text">TODOS</div>
          </header>

          <div className="content">
            <div className="content-inner">
              <div className="input-wrap">
                <div className="input-with-btn">
                  <input
                    type="text"
                    id="todo-input"
                    name="todo-input"
                    className="input"
                    placeholder="Новая задача"
                    value={value}
                    onChange={onChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSaveInput();
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="add-btn"
                    onClick={handleSaveInput}
                    tabIndex={-1}
                  >
                    +
                  </button>
                </div>

                <div className="todo-list">
                  {todos.map((todo: Todo, index: number) => {
                    const checkboxId = `todo-checkbox-${index}`;
                    return (
                      <label
                        key={index}
                        className="custom-checkbox-label"
                        htmlFor={checkboxId}
                      >
                        <input
                          type="checkbox"
                          id={checkboxId}
                          name={checkboxId}
                          checked={todo.completed}
                          onChange={() => toggleComplete(index)}
                          className="custom-checkbox"
                        />
                        <span className="custom-circle">
                          {todo.completed && (
                            <span className="checkmark">✔</span>
                          )}
                        </span>
                        <div
                          className="todo-text"
                          style={{
                            textDecoration: todo.completed
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {todo.text}
                        </div>
                      </label>
                    );
                  })}
                </div>

                <div className="filter-buttons">
                  <TaskCounter
                    count={todos.filter((todo) => !todo.completed).length}
                  />
                  <button onClick={() => setFilter("all")}>Все</button>
                  <button onClick={() => setFilter("completed")}>
                    Выполненные
                  </button>
                  <button onClick={() => setFilter("incomplete")}>
                    Незавершенные
                  </button>
                  <button onClick={clearAllTodos}>Очистить список</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
