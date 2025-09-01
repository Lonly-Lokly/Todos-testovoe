import React from 'react';

interface TaskCounterProps {
  count: number;
}

const TaskCounter: React.FC<TaskCounterProps> = ({ count }) => (
  <span className="task-counter">Осталось задач: {count}</span>
);

export default TaskCounter;