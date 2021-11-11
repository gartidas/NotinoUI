export interface TodoItemProps {
  id: string;
  title: string;
}

const TodoItem = ({ title }: TodoItemProps) => {
  const handleOnClick = () => {
    window.location.href = "/detail";
  };

  return (
    <div>
      <div onClick={handleOnClick}>{title}</div>
    </div>
  );
};

export default TodoItem;
