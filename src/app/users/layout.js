"use client";
import { useState, useEffect } from "react";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function UsersLayout({ children }) {
  return (
    <Box sx={{ height: "100vh" }} className="scrollArea">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => history.back()}
          >
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
