"use client";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [users, setUsers] = useState([]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/users",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <List
      sx={{
        width: "100%",
        height: "90%",
        bgcolor: "background.paper",
      }}
    >
      {data?.map((user) => (
        <Link href={`/users/details/${user.login}`}>
          <ListItem key={user.node_id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={`Image of ${user.login}`} src={user.avatar_url} />
            </ListItemAvatar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user.login}
            </Typography>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
