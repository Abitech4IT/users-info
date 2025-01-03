import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import UserCard from "../components/UserCard";
import { User } from "../types";

type UserCardProps = {
  users: User[];
  isLoading: boolean;
};

function UserList({ users, isLoading }: UserCardProps) {
  if (isLoading) {
    return (
      <Typography textAlign="center" my={30}>
        Loading...
      </Typography>
    );
  }
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        User List
      </Typography>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default UserList;
