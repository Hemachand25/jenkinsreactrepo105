import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Avatar,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import analyticsImage from "../assets/analytics.jpg";

const Dashboard = () => {
  const cardStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: 6,
    },
    borderRadius: 3,
    backgroundColor: "#2b2b2b",
    color: "#fff",
    p: 2,
    height: "100%",
  };

  const iconBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 2,
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "black" }} gutterBottom>
          🚀 ERP Dashboard
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray" }}>
          Welcome back! Here's an overview of your ERP system.
        </Typography>
      </Box>

      {/* Grid for Cards */}
      <Grid container spacing={4}>
        {/* Top Two Cards */}
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <Box sx={iconBoxStyle}>
              <Avatar sx={{ bgcolor: "#616161", width: 56, height: 56 }}>
                <PeopleIcon fontSize="large" />
              </Avatar>
            </Box>
            <CardContent>
              <Typography variant="h6" align="center">
                Employees
              </Typography>
              <Typography variant="body2" align="center" sx={{ color: "#bbb" }}>
                Manage employee records
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <Box sx={iconBoxStyle}>
              <Avatar sx={{ bgcolor: "#757575", width: 56, height: 56 }}>
                <BusinessIcon fontSize="large" />
              </Avatar>
            </Box>
            <CardContent>
              <Typography variant="h6" align="center">
                Departments
              </Typography>
              <Typography variant="body2" align="center" sx={{ color: "#bbb" }}>
                View and manage departments
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Full-width Analytics Card */}
        <Grid item xs={12}>
          <Card sx={{ ...cardStyle, p: 0 }}>
            <CardMedia
              component="img"
              height="220"
              image={analyticsImage}
              alt="ERP Analytics"
              sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6">
                ERP Analytics
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Visualize performance metrics, reports, and data trends for smarter decisions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
