import { memo } from "react";
import { useHistory } from "react-router";
import { ITodo } from "../domainTypes";

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: ITodoItemProps) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/todos/${todo.id}/detail`);
  };

  return (
    <div>
      <div onClick={handleOnClick}>{todo.title}</div>
    </div>
  );
};

export default memo(TodoItem);
