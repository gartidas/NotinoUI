import TodoItem from "../app/components/TodoItem";
import { useTodos } from "../app/contextProviders/TodosProvider";

const TodosPage = () => {
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

export default TodosPage;
