import { Card, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useTodos } from "../../../contextProviders/TodosProvider";
import { makeStyles } from "@mui/styles";
import { StyledContainer, StyledTitle } from "./TodoDetailTemplate.styled";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "550px",
    height: "450px",
    padding: "20px",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

const TodoDetailTemplate = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, selectedTodo, fetchTodoById } = useTodos();
  const classes = useStyles();

  useEffect(() => {
    fetchTodoById(id);
  }, [fetchTodoById, id]);

  if (isLoading || !selectedTodo)
    return (
      <StyledContainer>
        <Skeleton width={550} height={450} />
      </StyledContainer>
    );

  return (
    <StyledContainer>
      <Card className={classes.root}>
        <StyledTitle>Todo:</StyledTitle>
        <StyledTitle>{selectedTodo.title}</StyledTitle>
      </Card>
    </StyledContainer>
  );
};

export default TodoDetailTemplate;
