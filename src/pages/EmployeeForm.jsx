import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
  useTheme,
} from "@mui/material";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", department: "" });
  const theme = useTheme();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#2b2b2b",
          color: "#fff",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          align="center"
        >
          Employee Registration
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="filled"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              style: { backgroundColor: "#424242", color: "#fff" },
            }}
            InputLabelProps={{ style: { color: "#bbb" } }}
          />

          <TextField
            fullWidth
            variant="filled"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              style: { backgroundColor: "#424242", color: "#fff" },
            }}
            InputLabelProps={{ style: { color: "#bbb" } }}
          />

          <TextField
            fullWidth
            variant="filled"
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              style: { backgroundColor: "#424242", color: "#fff" },
            }}
            InputLabelProps={{ style: { color: "#bbb" } }}
          />

          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                backgroundColor: "#424242",
                '&:hover': {
                  backgroundColor: "#616161",
                },
                color: "#fff",
                px: 4,
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default EmployeeForm;
