// <!-- ---
// import { Image } from "astro:assets";
// import { type CollectionEntry } from "astro:content";
// type Props = {
//   post: CollectionEntry<"posts">;
// };

// const { post } = Astro.props;
// --- -->

export default function Post({ post }) {
  return (
    <article>
      <a href={`/blog/${post.slug}`}>
        <img
          src={post.data.image.src || post.data.image}
          width={600}
          height={600 / 1.5}
          alt={post.data.title}
          className="rounded-2xl shadow-xl mb-4 aspect-thumbnail object-cover"
        />
      </a>
      <a
        href={`/blog/${post.slug}`}
        className="text-4xl text-zinc-900 font-semibold inline-block"
      >
        <h2>{post.data.title}</h2>
      </a>
      <p className="text-zinc-500 text-2xl line-clamp-2">{post.body}</p>
    </article>
  );
}
