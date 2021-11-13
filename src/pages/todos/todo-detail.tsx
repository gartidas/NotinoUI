import DefaultLayout from "../../components/layouts/DefaultLayout/DefaultLayout";
import TodoDetailTemplate from "../../components/templates/TodoDetailTemplate/TodoDetailTemplate";

const TodoDetail = () => {
  return (
    <DefaultLayout isButtonShown>
      <TodoDetailTemplate />
    </DefaultLayout>
  );
};

export default TodoDetail;
