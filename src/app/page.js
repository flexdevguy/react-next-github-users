"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <Button>
          <Link href={`/users`}>Get Github Users</Link>
        </Button>
      </Box>
    </>
  );
}
