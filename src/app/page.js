"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div>HomePage</div>
      <Button>
        <Link href={`/users`}>Users</Link>
      </Button>
    </>
  );
}
