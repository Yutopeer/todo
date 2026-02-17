import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import './App.css';

function App() {
  const { todos, filter, setFilter, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="app">
      <h1>ToDo</h1>
      <TodoInput onAdd={addTodo} />
      <TodoFilter current={filter} onChange={setFilter} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && <p className="empty">タスクがありません</p>}
    </div>
  );
}

export default App;
