import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

import PostContent, {
  PostContentType,
} from "@/components/SanityComponents/Post";

import ServiceContent, {
  ServiceContentType,
} from "@/components/SanityComponents/ServiceContent";

import NewsContent, {
  NewsContentType,
} from "@/components/SanityComponents/NewsContent";
import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";

// =========================
// GROQ QUERIES
// =========================

const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    mainImage{ asset->{url} },
    youtubeVideoUrl,
    faq[]{ question, answer }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  }
}`;

const SERVICE_QUERY = `{
  "service": *[_type == "ServiceCategory" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body1,
    body2,
    mainImage{ asset->{url} },
    youtubeVideoUrl,
    faq[]{ question, answer },
    customTable{ title, headers, rows[]{ cells } }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{
      alt,
      caption,
      link,
      asset->{ url }
    }
  }
}`;

const NEWS_QUERY = `{
  "news": *[_type == "news" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    author,
    publishedAt,
    mainImage{ asset->{url} },
    faq[]{ question, answer }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{
      alt,
      caption,
      link,
      asset->{ url }
    }
  }
}`;

export const revalidate = 0;

// =========================
// TYPES
// =========================

type SlugParams = { slug: string };

type CarouselImage = {
  alt?: string;
  caption?: string;
  link?: string;
  asset?: { url?: string };
};

export type CarouselBlock = {
  title?: string;
  images?: CarouselImage[];
};

// =========================
// PAGE LOGIC
// =========================

export default async function SlugPage({
  params: paramsPromise,
}: {
  params: Promise<SlugParams>;
}) {
  const { slug } = await paramsPromise;

  // 1️⃣ Try Post
  const postData = await client.fetch<{
    post: PostContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(POST_QUERY, { slug });

  if (postData.post) {
    return (
      <div className="blog-container">
        <PostContent
          content={{
            ...postData.post,
            carouselBlock: postData.carouselBlock ?? undefined,
          }}
        />
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      </div>
    );
  }

  // 2️⃣ Try Service
  const serviceData = await client.fetch<{
    service: ServiceContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(SERVICE_QUERY, { slug });

  if (serviceData.service) {
    return (
      <ServiceContent
        content={{
          ...serviceData.service,
          carouselBlock: serviceData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // 3️⃣ Try News + carousel
  const newsData = await client.fetch<{
    news: NewsContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(NEWS_QUERY, { slug });

  if (newsData.news) {
    return (
      <NewsContent
        content={{
          ...newsData.news,
          carouselBlock: newsData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // 4️⃣ Nothing found
  return notFound();
}
