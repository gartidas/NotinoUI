import { memo } from "react";
import { useHistory } from "react-router";

export interface TodoItemProps {
  id: string;
  title: string;
}

const TodoItem = ({ title, id }: TodoItemProps) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/todos/${id}/detail`);
  };

  return (
    <div>
      <div onClick={handleOnClick}>{title}</div>
    </div>
  );
};

export default memo(TodoItem);
