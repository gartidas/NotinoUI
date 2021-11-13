import { ListItem, Skeleton } from "@mui/material";

const TodoItemSkeleton = ({ id }: { id: number }) => {
  return (
    <ListItem key={id}>
      <Skeleton variant="rectangular" width="400px" height="70px" />
    </ListItem>
  );
};

export default TodoItemSkeleton;
