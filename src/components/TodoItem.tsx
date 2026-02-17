import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function formatDueDate(dueDate: string): { label: string; overdue: boolean } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate + 'T00:00:00');
  const diffDays = Math.round((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return { label: `${Math.abs(diffDays)}日超過`, overdue: true };
  if (diffDays === 0) return { label: '今日', overdue: false };
  if (diffDays === 1) return { label: '明日', overdue: false };
  return { label: dueDate, overdue: false };
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  const dueDateInfo = todo.dueDate ? formatDueDate(todo.dueDate) : null;

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
        {dueDateInfo && (
          <span className={`due-date ${dueDateInfo.overdue && !todo.completed ? 'overdue' : ''}`}>
            {dueDateInfo.label}
          </span>
        )}
      </label>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  );
}
