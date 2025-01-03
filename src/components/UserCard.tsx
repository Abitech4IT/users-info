import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { User } from "../types";
import { useNavigate } from "react-router-dom";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/user/${user.id}`)}
          sx={{ textTransform: "capitalize" }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;
