"use client"

import { useParams } from "next/navigation";

export default function UserProfile() {

    const { username } = useParams();

    return (
      <div>
        <h1>User Profile</h1>
        <h2>{username}</h2>
      </div>
    );
  }