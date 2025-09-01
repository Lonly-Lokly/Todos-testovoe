import { useState, useEffect } from 'react';
import type { Todo } from '../types';
import { useLocalStorageTodos } from './useLocalStorageTodos';

const useTodos = () => {
    const { getTodos, setTodos: saveTodosToStorage, clearTodos } = useLocalStorageTodos();

    const [todos, setTodos] = useState<Todo[]>(getTodos());
    const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

    useEffect(() => {
        saveTodosToStorage(todos);
    }, [todos, saveTodosToStorage]);

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

    const clearAllTodos = () => {
        setTodos([]);
        clearTodos();
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
        clearAllTodos,
    };
};

export default useTodos;