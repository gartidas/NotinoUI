import TodoItem from "./TodoItem";
import { useTodos } from "./TodosProvider";

const Todos = () => {
  const { isLoading, todos } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
