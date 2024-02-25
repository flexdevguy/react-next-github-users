"use client";
import { useState, useEffect } from "react";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function UsersLayout({ children }) {
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const response = await axios.get("https://api.github.com/users");
  //         setUsers(response.data);
  //       } catch (error) {
  //         console.error("Error fetching GitHub users:", error);
  //       }
  //     };

  //     fetchUsers();
  //   }, [children]);
  return (
    <section>
      {/* <nav>
        <Button
          onClick={() => {
            history.back();
          }}
        >
          Back
        </Button>
      </nav> */}
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
    </section>
  );
}
