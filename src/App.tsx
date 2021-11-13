import { Route, Switch, Redirect } from "react-router-dom";
import TodoDetail from "./pages/todos/todo-detail";
import Todos from "./pages/todos/todos";

function App() {
  return (
    <Switch>
      <Route path="/todos" exact>
        <Todos />
      </Route>
      <Route path="/todos/:id/detail" exact>
        <TodoDetail />
      </Route>
      <Redirect to="/todos"></Redirect>
    </Switch>
  );
}

export default App;
