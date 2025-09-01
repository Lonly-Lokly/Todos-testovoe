import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App UI', () => {
  it('добавляет новую задачу', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Enter a new todo/i);
    const button = screen.getByText(/add something/i);

    fireEvent.change(input, { target: { value: 'Моя задача' } });
    fireEvent.click(button);

    expect(screen.getByText('Моя задача')).toBeInTheDocument();
  });

  it('отмечает задачу выполненной', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Enter a new todo/i);
    const button = screen.getByText(/add something/i);

    fireEvent.change(input, { target: { value: 'Выполнить' } });
    fireEvent.click(button);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).toBeChecked();
  });

  it('очищает список задач', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Enter a new todo/i);
    const button = screen.getByText(/add something/i);

    fireEvent.change(input, { target: { value: 'Очистить' } });
    fireEvent.click(button);

    fireEvent.click(screen.getByText(/Очистить список/i));
    expect(screen.queryByText('Очистить')).not.toBeInTheDocument();
  });
});