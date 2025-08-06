import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  InputBase,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{ backgroundColor: "#212121" }} // Dark grey
    >
      <Toolbar>
        {/* Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>
            Dashboard
          </MenuItem>
          <MenuItem component={Link} to="/employee-form" onClick={handleMenuClose}>
            Add Employee
          </MenuItem>
          <MenuItem component={Link} to="/departments" onClick={handleMenuClose}>
            Departments
          </MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
            Login
          </MenuItem>
        </Menu>

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          ERP System
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: theme.palette.common.white,
            px: 1,
            py: 0.5,
            borderRadius: 2,
            width: { xs: "50%", sm: "30%" },
          }}
        >
          <SearchIcon color="action" />
          <InputBase
            placeholder="Search…"
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
