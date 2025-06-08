import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import "@/components/Blog/Blog.css";
import Link from "next/link";
export const revalidate = 0;

// ✅ Use this query to fetch all posts (no slug param needed)
const NEWS_QUERY = `*[_type == "news"] | order(publishedAt desc){
  _id,
  title,
  slug,
    author,
  publishedAt,
  description,
  mainImage {
    asset->{ _id, url }
  }
}`;

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(NEWS_QUERY);

  return (
    <div className="blogMainContainer">
      <div className="blogMainContent">
        {posts.map((post) => (
          <div className="newsCardContainer" key={post._id}>
            <div className="blogCardImg">
              {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={550}
                  height={310}
                />
              )}
            </div>
            <div className="blogCardDate">
              <p>
                {post.author} |{" "}
                {new Date(post.publishedAt)
                  .toLocaleDateString("en-GB")
                  .replaceAll("/", "-")}
              </p>
            </div>
            <div className="blogCardTitle">
              <h2>{post.title}</h2>
            </div>
            <div className="blogCardPara">
              <p>{post.description}</p>
            </div>
            <div className="blogCardBut">
              <button>
                <Link href={`/${post.slug.current}`}>Know More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
