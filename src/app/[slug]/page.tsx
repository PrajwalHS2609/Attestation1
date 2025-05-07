// src/app/[slug]/page.tsx

import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import "@/components/Blog/Blog.css";
import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{
      _id,
      url
    }
  }
}`;

// ✅ Awaiting params in generateMetadata
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return {
    title: post.metaTitle || "Default Title",
    description: post.metaDescription || "Default blog description.",
  };
}

// ✅ Awaiting params in the main page component
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });

  if (!post) {
    notFound();
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
        <BlogSidebar />
      </div>
    </div>
  );
}

// ✅ generateStaticParams remains unchanged
type SlugType = {
  slug: {
    current: string;
  };
};

export async function generateStaticParams() {
  const posts = await client.fetch<SlugType[]>(`*[_type == "post"]{ slug }`);
  return posts.map((post) => ({ slug: post.slug.current }));
}
