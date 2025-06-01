// useTodos.ts
import { useState } from 'react';
import type { Todo } from '../types.ts';

const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

	const addTodo = (text: string) => {
		setTodos([{ text, completed: false }, ...todos]);
	};

	const toggleComplete = (index: number) => {
		const newTodos = todos.map((todo: Todo, i: number) => {
			if (i === index) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const filteredTodos = () => {
		switch (filter) {
			case 'completed':
				return todos.filter((todo: Todo) => todo.completed);
			case 'incomplete':
				return todos.filter((todo: Todo) => !todo.completed);
			default:
				return todos;
		}
	};

	return {
		todos: filteredTodos(),
		addTodo,
		toggleComplete,
		setFilter,
	};
};

export default useTodos;
