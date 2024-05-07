"use client"

import {useAuth} from "@/app/hooks/auth/useAuth";
import { signOut } from "next-auth/react";

export default function Home() {
    const {data} = useAuth()
  return (
      <div>
            <h1>Home</h1>
            <p>{data?.user?.email}</p>
            <button onClick={() => signOut()}>Sign Out</button>
      </div>
  );
}
