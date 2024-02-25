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
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [page, setPage] = useState(1);
  const [usersList, setUsersList] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const loader = useRef(null);
  const handleObserver = (entities) => {
    const target = entities[0];
    console.log(`isIntersecting:${target.isIntersecting}`);
    if (target.isIntersecting && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/users?per_page=10&page=${page}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  if (data) {
    // setUsersList((prevState, prop) => [...data]);
  }

  return (
    <>
      <List
        sx={{
          width: "100%",
          height: "90%",
          bgcolor: "background.paper",
        }}
      >
        {data?.map((user, index) => (
          <>
            <Link href={`/users/details/${user.login}`}>
              <ListItem key={user.node_id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={`Image of ${user.login}`}
                    src={user.avatar_url}
                  />
                </ListItemAvatar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {user.login}
                </Typography>
              </ListItem>
            </Link>

            {index === data.length - 1 ? (
              <div
                ref={loader}
                style={{ height: "10px", background: "transparent" }}
              />
            ) : null}
          </>
        ))}
      </List>
    </>
  );
}
