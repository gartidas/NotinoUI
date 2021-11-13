import { List } from "@mui/material";
import TodoItemSkeleton from "../elements/TodoItemSkeleton";

const TodosLoader = () => {
  const loadingCards = Array.from(Array(10).keys()).map((x) => (
    <TodoItemSkeleton id={x} />
  ));
  return <List>{loadingCards}</List>;
};

export default TodosLoader;
