import { Route, Switch, Redirect } from "react-router-dom";
import TodoDetailPage from "./pages/TodoDetailPage";
import TodosPage from "./pages/TodosPage";

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
