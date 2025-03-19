"use client";

import styles from "./postList.module.css";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { increment } from "@/redux/counterSlice";
import { redirect, useRouter } from "next/navigation";
import NewPost from "@/component/newPost";
import { useState, useEffect } from "react";
import { setAuthToken } from "@/redux/counterSlice";


import axiosClient from "@/app/axios_custom";


interface Post {
  _id: string;
  description: string | null;
  image_urls: string[] | null;
  n_comment: number | null;
  n_likes: number | null;
}

export function PostList({ username }: { username?: string }) {

  const router = useRouter();

  const authToken = useAppSelector((state) => state.counter.authToken);

  if (!authToken || authToken == "") {
    router.replace("/login");
  }

  const count = useAppSelector((state) => state.counter.value);
  
  const dispatch = useAppDispatch();

  const [posts, setPosts] = useState<Post[]>([]);

  const [hasApiError, setHasApiError] = useState(false);

  const fetchProfile = async () => {
    const response = await fetch('/api/profile', {
      headers: {
        'Authorization': authToken ?? ""
      }
    });
  }

  const fetchPosts = async () => {
    try {

      let url;

      if (username) {
        url = `/api/post/list?username=${username}`;
      } else {
        url = '/api/post/list';
      }

      const response = await axiosClient.get(url);


      // const response = await fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': authToken ?? ""
      //   }
      // });

      if (response.status == 401) {
        dispatch(setAuthToken(""));
        return
      }

      if (response.status !== 200) {
        setHasApiError(true);
        setPosts([])
      } else {
        const responseJson = response.data;
        const posts = responseJson.posts
        setPosts(posts)
      }


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const profile = {
    name: "h.a.n.a.n.a",
    display_name: "Hannah",
    bio: "I'm a cat.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    n_followers: count,
    n_following: 345,
    n_posts: 9,
  }

  return (
    <div className={styles.page}>

      <main className={styles.main}>

        <div className={styles.profile}>
          <div className={styles.profileImageContainer}>
            <div className={styles.profileImage}>
              <Image
                src={profile.image} alt="Profile"
                fill
                style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.profileImageRing} />
          </div>
          <div className={styles.profileInfo}>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              <span>{profile.name}</span>
            </div>
            <div style={{ display: "flex", gap: "30px", fontWeight: "600" }}>
              <span>{profile.n_posts} posts</span>
              <span>{profile.n_followers} followers</span>
              <span>{profile.n_following} following</span>
            </div>
            <div style={{ fontWeight: "600", fontSize: "14px" }}>
              <span>{profile.display_name}</span>
            </div>
            <div style={{ fontWeight: "400", fontSize: "14px" }}>
              <span>{profile.bio}</span>
            </div>
            {!username && <div>
              <NewPost onFinish={() => {
                fetchPosts();
              }}>
                <button className={styles.addPostButton}>Add post</button>
              </NewPost>
            </div>}
          </div>
        </div>

        {hasApiError && <div>User not found.</div>}

        <div className={styles.tabs}>
          <div>
            {/* <svg aria-label="" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg> */}
            <span>Posts</span>
          </div>
          <div>
            {/* <svg aria-label="" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg> */}
            <span>Saved</span>
          </div>
          <div>
            {/* <svg aria-label="" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg> */}
            <span>Tagged</span>
          </div>
        </div>

        <div className={styles.posts}>
          {posts?.map((post) => (
            <div className={styles.post} key={post._id}>

              <img src={post.image_urls?.[0]} alt="Post" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />

              <div className={styles.postInfo}>
                <div>
                  {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg> */}
                  <span>{post.n_likes}</span>
                </div>
                <div>
                  {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg> */}

                  <span>{post.n_comment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </main>



      <footer className={styles.footer}>
        <div>
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Threads</a>
          <a href="#">Contact Uploading & Non-Users</a>
          <a href="#">Me Verified</a>
        </div>
        <div>
          <a href="#">English</a>
          <a href="#">© 2025 IG from Me</a>
        </div>
      </footer>

    </div>
  );
}