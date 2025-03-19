"use client"

import { useParams } from "next/navigation";

import { PostList } from "@/component/postList";

export default function UserProfile() {

  const { username } = useParams();

  return <PostList username={username as string} />
}