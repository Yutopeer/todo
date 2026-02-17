import { useState } from 'react';

interface Props {
  onAdd: (text: string, dueDate?: string) => void;
}

export function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    onAdd(text, dueDate || undefined);
    setText('');
    setDueDate('');
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="新しいタスクを入力..."
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        className="due-date-input"
      />
      <button onClick={handleSubmit}>追加</button>
    </div>
  );
}
