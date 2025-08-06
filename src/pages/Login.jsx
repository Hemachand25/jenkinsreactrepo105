import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const theme = useTheme();

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login successful for ${loginData.username}`);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#2b2b2b", // Dark paper tone
          color: "#fff",
          width: "100%",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
          ERP Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="filled"
            label="Username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{ style: { backgroundColor: "#424242", color: "#fff" } }}
            InputLabelProps={{ style: { color: "#bbb" } }}
          />

          <TextField
            fullWidth
            variant="filled"
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{ style: { backgroundColor: "#424242", color: "#fff" } }}
            InputLabelProps={{ style: { color: "#bbb" } }}
          />

         <Box mt={3} textAlign="center">
  <Button
    variant="contained"
    type="submit"
    size="large"
    sx={{
      backgroundColor: "#424242", // Base grey
      '&:hover': {
        backgroundColor: "#616161", // Slightly lighter on hover
      },
      color: "#fff",
      px: 4,
    }}
  >
    Login
  </Button>
</Box>



        </form>
      </Paper>
    </Container>
  );
};

export default Login;
