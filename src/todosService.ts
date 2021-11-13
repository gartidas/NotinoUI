import axios from "axios";
import { ITodo } from "./domainTypes";

export const getTodos = async (): Promise<ITodo[] | undefined> => {
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/todos/");
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getTodo = async (id: string): Promise<ITodo | undefined> => {
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
