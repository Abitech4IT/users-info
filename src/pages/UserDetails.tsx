import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, Paper, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid2";
import { User } from "../types";

function UserDetails() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (isLoading) {
    return (
      <Typography textAlign="center" my={30}>
        Loading...
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
      >
        Back
      </Button>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Details
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle1">Name:</Typography>
            <Typography variant="body1">{user?.name}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle1">Username:</Typography>
            <Typography variant="body1">{user?.username}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="body1">{user?.email}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle1">Phone:</Typography>
            <Typography variant="body1">{user?.phone}</Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle1">Address:</Typography>
            <Typography variant="body1">
              {user?.address.street}, {user?.address.suite},{" "}
              {user?.address.city}, {user?.address.zipcode}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle1">Company:</Typography>
            <Typography variant="body1">{user?.company.name}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default UserDetails;
