"use client";
import { Avatar, Box, Button, ButtonGroup, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import useSWR from "swr";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function UserDetails({ params }) {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const userId = paths[paths.length - 1];
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: details,
    error: detailsError,
    isLoading: detailsIsLoading,
  } = useSWR(`https://api.github.com/users/${userId}`, fetcher);
  console.log("userDetails", details);

  if (detailsError) return <div>failed to load</div>;
  if (detailsIsLoading) return <div>loading...</div>;
  if (!details) return <div>no details found</div>;

  return (
    <Box sx={{ width: "100%", px: "10px", py: "10px" }}>
      <Avatar alt={`Image of ${details.name}`} src={details.avatar_url} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {details.name}
      </Typography>
      <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
        {userId}
      </Typography>
      <ButtonGroup sx={{ width: "100%" }}>
        <Button aria-label="followers">Followers:{details.followers}</Button>
        <Button aria-label="following">Following:{details.following}</Button>
        <Button aria-label="following">
          Public Repos:{details.public_repos}
        </Button>
      </ButtonGroup>
      {details.twitter_username ? (
        <Link
          target="_blank"
          href={`https://twitter.com/${details.twitter_username}`}
        >
          <TwitterIcon></TwitterIcon>
          {" : @" + details.twitter_username}
        </Link>
      ) : null}
    </Box>
  );
}
