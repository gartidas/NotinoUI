import { Route, Switch, Redirect } from "react-router-dom";
import TodoDetailPage from "./TodoDetailPage";
import TodosPage from "./TodosPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/todos" exact>
          <TodosPage />
        </Route>
        <Route path="/todos/:id/detail" exact>
          <TodoDetailPage />
        </Route>
        <Redirect to="/todos"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
