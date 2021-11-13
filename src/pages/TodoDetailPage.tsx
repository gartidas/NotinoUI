import { useEffect } from "react";
import { useParams } from "react-router";
import { useTodos } from "../contextProviders/TodosProvider";

const TodoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, selectedTodo, fetchTodoById } = useTodos();

  useEffect(() => {
    fetchTodoById(id);
  }, [fetchTodoById, id]);

  if (isLoading || !selectedTodo) return <div>Loading...</div>;

  return (
    <div>
      <div>{selectedTodo.title}</div>
    </div>
  );
};

export default TodoDetailPage;
