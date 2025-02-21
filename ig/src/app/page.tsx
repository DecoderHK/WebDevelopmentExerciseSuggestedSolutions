
import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {


  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1739433438331-e50bb5467531?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1739616194269-46f6247e65fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1739370327561-87820ea0dd33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1739369763175-f37f9d898ce4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1739546103938-b30b9b1c828d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1739478469491-0f5fba9dc214?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1739477021967-e14dc3938e56?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1739163519731-c29cbcee8d84?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1739178124552-89957c7e3f0e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1739129857889-2d6a4e4a4e64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
      n_likes: 10,
      n_comment: 2,
    },
  ];

  const profile = {
    name: "h.a.n.a.n.a",
    display_name: "Hannah",
    bio: "I'm a cat.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    n_followers: 101,
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
            <div>
              <button className={styles.addPostButton}>Add post</button>
            </div>
          </div>
        </div>

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
          {posts.map((post) => (
            <div className={styles.post} key={post.id}>

              <Image src={post.image} alt="Post" fill
                style={{ objectFit: 'cover' }} />

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
