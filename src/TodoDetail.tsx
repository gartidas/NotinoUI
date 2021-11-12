import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TodoItemProps } from "./TodoItem";

const TodoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<TodoItemProps>();

  const getTodo = async (): Promise<TodoItemProps> => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return data;
  };

  useEffect(() => {
    (async () => {
      var todo = await getTodo();
      setTodo(todo);
    })();
    // for now set only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return todo ? (
    <div>
      <div>{todo.title}</div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default TodoDetail;
