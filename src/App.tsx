import { Route, Switch, Redirect } from "react-router-dom";
import TodoDetail from "./TodoDetail";
import Todos from "./Todos";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/todos" exact>
          <Todos />
        </Route>
        <Route path="/todos/:id/detail" exact>
          <TodoDetail />
        </Route>
        <Redirect to="/todos"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
