import TodoItem from "../components/TodoItem";
import { useTodos } from "../contextProviders/TodosProvider";

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
