import { renderHook, act } from '@testing-library/react';
import useTodos from '../hooks/useTodos';

describe('useTodos', () => {
  it('добавляет задачу', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo('test');
    });
    expect(result.current.todos[0].text).toBe('test');
  });

  it('переключает выполнение задачи', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo('test');
      result.current.toggleComplete(0);
    });
    expect(result.current.todos[0].completed).toBe(true);
  });

  it('очищает задачи', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo('test');
      result.current.clearAllTodos();
    });
    expect(result.current.todos.length).toBe(0);
  });
});