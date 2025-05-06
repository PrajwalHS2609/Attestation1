// src/app/[slug]/page.tsx
import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import "@/components/Blog/Blog.css";
import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  mainImage {
    asset->{
      _id,
      url
    }
  }
}`;


export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Expecting params to be a Promise
}) {
  const resolvedParams = await params; // Resolve the Promise to get { slug }
  const { slug } = resolvedParams;

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });

  if (!post) {
    return (
      <main>
        <p>Post not found.</p>
      </main>
    );
  }

  const postImageUrl = post?.mainImage?.asset?.url || null;

  return (
    <div className="blog-container">
      <div className="blog-wrapper1">
        <div className="blogImg-content">
          {postImageUrl ? (
            <Image
              src={postImageUrl}
              alt={post.title || "Post image"}
              width={550}
              height={310}
            />
          ) : (
            <p className="image-fallback">Image not available</p>
          )}
        </div>

        <h1 className="blogHead-content">{post.title}</h1>

        <div className="blogHead-content">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </div>
     <div className="blog-wrapper2">
     <BlogSidebar/>
     </div>
    </div>
  );
}

// Optional: Pre-generate paths for static site generation
type SlugType = {
  slug: {
    current: string;
  };
};

export async function generateStaticParams() {
  const posts = await client.fetch<SlugType[]>(`*[_type == "post"]{ slug }`);
  return posts.map((post) => ({ slug: post.slug.current }));
}
