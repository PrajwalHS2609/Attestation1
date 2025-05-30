import "@/components/Style/style.css";
import "@/components/Blog/Blog.css";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 0;

const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    description,
    mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }
  }`;
export default async function HomeBlogMain() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

  return (
    <div className="blogMainContainer">
      <div className="blogMainContent">
        {posts.map((post) => (
          <div className="blogCardContainer" key={post._id}>
            <div className="blogCardImg">
              {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={550}
                  height={310}
                  className="rounded-md object-cover aspect-video"
                />
              )}
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
  )
}

