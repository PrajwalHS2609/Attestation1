import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// CSS for both post and service
import "@/components/Blog/Blog.css";
import "@/components/Style/style.css";

import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

// ✅ keep generateMetadata as you wanted
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const content = post || service;

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: content.metaTitle || content.title || "Default Title",
    description: content.metaDescription || "Default description.",
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
  const service = !post
    ? await client.fetch<SanityDocument>(SERVICE_QUERY, { slug })
    : null;
  const content = post || service;

  if (!content) notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;
  const isPost = !!post;

  return (
    <div className={isPost ? "blog-container" : "service-container"}>
      <div className={isPost ? "blog-wrapper1" : "service-wrapper1"}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={content.title || "Image"}
            width={550}
            height={310}
          />
        ) : (
          <p className="image-fallback">Image not available</p>
        )}

        <h1 className={isPost ? "blogHead-content" : "head-container"}>
          {content.title}
        </h1>

        <div className={isPost ? "blogHead-content" : "head-container"}>
          {Array.isArray(content.body) && <PortableText value={content.body} />}
        </div>
      </div>

      {isPost && (
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      )}
    </div>
  );
}

type SlugType = { slug: { current: string } };

export async function generateStaticParams() {
  const postSlugs = await client.fetch<SlugType[]>(
    `*[_type == "post"]{ slug }`
  );
  const serviceSlugs = await client.fetch<SlugType[]>(
    `*[_type == "ServiceCategory"]{ slug }`
  );

  return [...postSlugs, ...serviceSlugs].map((item) => ({
    slug: item.slug.current,
  }));
}
