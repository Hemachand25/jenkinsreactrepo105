import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const DepartmentPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "#2b2b2b",
          color: "#fff",
          p: 4,
          borderRadius: 3,
          width: "100%",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Departments
        </Typography>
        <Typography variant="body1" sx={{ color: "#ccc" }}>
          You can manage and list all departments here.
        </Typography>

        <Box mt={3}>
          {/* Placeholder: Add department table/list/form here */}
          <Typography variant="body2" sx={{ color: "#888" }}>
            (Department data will be displayed here.)
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default DepartmentPage;
