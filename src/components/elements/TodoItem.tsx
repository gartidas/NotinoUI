import { ListItem, ListItemButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { memo } from "react";
import { useHistory } from "react-router";
import { ITodo } from "../../domainTypes";
import styled from "styled-components";

interface ITodoItemProps {
  todo: ITodo;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

const StyledTitle = styled.h3`
  word-wrap: break-word;
  text-align: justify;
  text-align-last: center;
  color: #115196;
`;

const TodoItem = ({ todo }: ITodoItemProps) => {
  const history = useHistory();
  const classes = useStyles();
  const handleOnClick = () => {
    history.push(`/todos/${todo.id}/detail`);
  };

  return (
    <ListItem>
      <ListItemButton onClick={handleOnClick} className={classes.root}>
        <StyledTitle>{todo.title}</StyledTitle>
      </ListItemButton>
    </ListItem>
  );
};

export default memo(TodoItem);
