import React from 'react';
import useInputValue from './hooks/useInputValue';
import useTodos from './hooks/useTodos';
import useAddTodos from './hooks/useAddTodos';
import type { Todo } from './types';
import TaskCounter from './components/TaskCounter';
import './App.css';

const App: React.FC = () => {
	const { value, onChange, reset } = useInputValue('');
	const { todos, toggleComplete, addTodo, setFilter, clearAllTodos } = useTodos();
	const addTodoHandler = useAddTodos(addTodo);

	const handleSaveInput = () => {
		addTodoHandler(value);
		reset();
	};

	return (
		<section className="todos">

			<div className="container">
				<header className="header">
					<div className="header-text">TODOS</div>
				</header>

				<div className="content">
					<div className="content-inner">
						<div className="input-wrap">
							<button type="button" onClick={handleSaveInput}>
								add something
							</button>
							<input
								type="text"
								className="input"
								placeholder="Enter a new todo"
								value={value}
								onChange={onChange}
							/>



							<div className="todo-list">
								{todos.map((todo: Todo, index: number) => (
									<label key={index}>
										<input
											type="checkbox"
											checked={todo.completed}
											onChange={() => toggleComplete(index)}
											className='checkbox'
										/>
										<div className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
											{todo.text}
										</div>
									</label>
								))}
							</div>


							<div className="filter-buttons">
								<TaskCounter count={todos.filter(todo => !todo.completed).length} />
								<button onClick={() => setFilter('all')}>Все</button>
								<button onClick={() => setFilter('completed')}>Выполненные</button>
								<button onClick={() => setFilter('incomplete')}>Незавершенные</button>
								<button onClick={clearAllTodos}>Очистить список</button>
							</div>

						</div>
					</div>
				</div>
			</div>

		</section>
	);
}

export default App;
