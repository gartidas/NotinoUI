import { useEffect, useState } from "react";
import TodoItem, { TodoItemProps } from "./Todo";

// rework this into regular api call, feel free to use any open api
var getTodos = (): Promise<TodoItemProps[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: "1",
          title: "Go shopping",
        },
        {
          id: "2",
          title: "Job interview",
        },
        {
          id: "3",
          title: "Prepare homework",
        },
      ]);
    }, 100);
  });

function App() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);

  useEffect(() => {
    (async () => {
      var awaitedTodos = await getTodos();
      setTodos([...todos, ...awaitedTodos]);
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
}

export default App;
