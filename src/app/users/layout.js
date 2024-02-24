"use client";
import { Button } from "@mui/material";

export default function UsersLayout({ children }) {
  return (
    <section>
      <nav>
        <Button
          onClick={() => {
            history.back();
          }}
        >
          Back
        </Button>
      </nav>
      {children}
    </section>
  );
}
