"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div>HomePage</div>
      <Button onClick={() => router.push("/users")}>List Users</Button>
      <Button onClick={() => router.push("/users/details")}>
        User Details
      </Button>
    </>
  );
}
