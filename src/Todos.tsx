import axios from "axios";
import { useEffect, useState } from "react";
import TodoItem, { TodoItemProps } from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);

  const getTodos = async (): Promise<TodoItemProps[]> => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/todos/");
    return data;
  };

  useEffect(() => {
    (async () => {
      var awaitedTodos = await getTodos();
      setTodos(awaitedTodos);
    })();
    // for now set only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </div>
  );
};

export default Todos;
