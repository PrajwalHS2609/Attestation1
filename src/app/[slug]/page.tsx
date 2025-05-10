import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// CSS for both post and service
import "@/components/Blog/Blog.css";
import "@/components/Style/style.css";

import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";

import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import { portableTextComponents } from "./../../components/PortableTextComponents";

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
  body1,
  body2,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

const NEWS_QUERY = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
      author,
  publishedAt,
  description,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

// ✅ keep generateMetadata as you wanted
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const news =
    !post && !service ? await client.fetch(NEWS_QUERY, { slug }) : null;

  const content = post || service || news;

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

// -----------------------------------------------------------------------------------------

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

  const news =
    !post && !service
      ? await client.fetch<SanityDocument>(NEWS_QUERY, { slug })
      : null;

  const content = post || service || news;

  if (!content) notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;

  const isPost = !!post;
  const isService = !!service;
  const isNews = !!news;

  return (
    <div
      className={
        isNews
          ? "blog-container"
          : isPost
            ? "blog-container"
            : "main-container"
      }
    >
      <div
        className={
          isNews
            ? "blog-wrapper1"
            : isPost
              ? "blog-wrapper1"
              : "service-wrapper1"
        }
      >
        {/* Render image for News */}
        {isPost && imageUrl && (
          <Image
            src={imageUrl}
            alt={content.title || "News Image"}
            width={550}
            height={310}
          />
        )}

        {isNews && imageUrl && (
          <Image
            src={imageUrl}
            alt={content.title || "News Image"}
            width={550}
            height={310}
          />
        )}
        {/* HeaderComponent for Services */}
        {isService && imageUrl && (
          <HeaderComponent imageSrc={imageUrl} alt={content.title || "Image"} />
        )}

        {/* Title */}
        <h1
          className={
            isNews
              ? "blogHead-content"
              : isPost
                ? "blogHead-content"
                : "head-container"
          }
        >
          {content.title}
        </h1>

        {/* Published date for News */}
        {isNews && content.publishedAt && content.author && (
          <b className="published-date">
            Published on: {new Date(content.publishedAt).toLocaleDateString()}{" "}
            by {content.author}
          </b>
        )}

        {/* Body content (for all types) */}
        <div
          className={
            isNews
              ? "blogHead-content"
              : isPost
                ? "blogHead-content"
                : "head-container"
          }
        >
          {Array.isArray(content.body) && (
            <PortableText
              value={content.body}
              components={portableTextComponents}
            />
          )}
        </div>

        {/* body1 for Services */}
        {isService && Array.isArray(content.body1) && (
          <div className="head-container">
            <PortableText
              value={content.body1}
              components={portableTextComponents}
            />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
          </div>
        )}

        {/* body2 for Services */}
        {isService && Array.isArray(content.body2) && (
          <div className="head-container">
            <PortableText
              value={content.body2}
              components={portableTextComponents}
            />
          </div>
        )}
      </div>

      {isPost && (
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      )}

      {/* Sidebar for news posts */}
      {isNews && (
        <div className="blog-wrapper2">
          <BlogSidebar /> {/* Assuming you have a NewsSidebar component */}
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
  const newsSlugs = await client.fetch<SlugType[]>(
    `*[_type == "news"]{ slug }`
  );

  return [...postSlugs, ...serviceSlugs, ...newsSlugs].map((item) => ({
    slug: item.slug.current,
  }));
}
