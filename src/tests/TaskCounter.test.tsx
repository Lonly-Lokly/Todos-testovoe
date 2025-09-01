import { render, screen } from '@testing-library/react';
import TaskCounter from '../components/TaskCounter';
import '@testing-library/jest-dom';

test('показывает количество невыполненных задач', () => {
  render(<TaskCounter count={3} />);
  expect(screen.getByText(/3/)).toBeInTheDocument();
});