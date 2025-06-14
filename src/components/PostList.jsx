// ---
// import type { CollectionEntry } from "astro:content";
// import Post from "./Post";
// type Props = {
//   posts: CollectionEntry<"posts">[];
// };

// const { posts } = Astro.props;
// ---

import Post from "./Post";
import React from "react";

export default function PostList({ posts }) {
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-32 max-md:grid-cols-1 mb-14">

      {Array.isArray(posts) && posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
      
    </div>
  );
}
