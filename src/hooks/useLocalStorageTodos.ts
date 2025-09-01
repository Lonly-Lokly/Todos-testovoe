import { useCallback } from 'react';
import type { Todo } from '../types';

const TODOS_KEY = 'todos';

export function useLocalStorageTodos() {
  const getTodos = useCallback((): Todo[] => {
    const data = localStorage.getItem(TODOS_KEY);
    return data ? JSON.parse(data) : [];
  }, []);

  const setTodos = useCallback((todos: Todo[]) => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, []);

  const clearTodos = useCallback(() => {
    localStorage.removeItem(TODOS_KEY);
  }, []);

  return { getTodos, setTodos, clearTodos };
}