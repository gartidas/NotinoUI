import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ITodo } from "../domainTypes";
import * as todosService from "../services/todosService";

type ITodosContextValue = {
  isLoading: boolean;
  todos: ITodo[];
  selectedTodo: ITodo | undefined;
  fetchTodoById: (id: string) => Promise<void>;
};

const TodosContext = createContext<ITodosContextValue>(null!);
export const useTodos = () => useContext(TodosContext);

const TodosProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<ITodo>();

  const fetchTodos = useCallback(async () => {
    setIsLoading(true);

    const todos = await todosService.getTodos();
    if (todos) {
      setTodos(todos);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const fetchTodoById = useCallback(async (id: string) => {
    setIsLoading(true);

    const todo = await todosService.getTodo(id);
    if (todo) {
      setSelectedTodo(todo);
    }
    setIsLoading(false);
  }, []);

  const value: ITodosContextValue = {
    isLoading,
    todos,
    fetchTodoById,
    selectedTodo,
  };
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export default TodosProvider;
