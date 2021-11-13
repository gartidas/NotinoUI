import { List } from "@mui/material";
import TodoItem from "../elements/TodoItem";
import TodosLoader from "../modules/TodosLoader";
import { useTodos } from "../../contextProviders/TodosProvider";

const TodosTemplate = () => {
  const { isLoading, todos } = useTodos();

  if (isLoading) return <TodosLoader />;

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodosTemplate;
