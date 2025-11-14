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
    images[]{
      alt,
      caption,
      link,
      asset->{ url }
    }
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

const NEWS_QUERY = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  author,
  publishedAt,
  mainImage{ asset->{url} },
  faq[]{ question, answer }
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

type CarouselBlock = {
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

  // 1️⃣ Try Post + carousel
  const postData: {
    post: PostContentType | null;
    carouselBlock: CarouselBlock | null;
  } = await client.fetch(POST_QUERY, { slug });

  if (postData.post) {
    return (
      <PostContent
        content={{
          ...postData.post,
          carouselBlock: postData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // 2️⃣ Try Service + carousel
  const serviceData: {
    service: ServiceContentType | null;
    carouselBlock: CarouselBlock | null;
  } = await client.fetch(SERVICE_QUERY, { slug });

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

  // 3️⃣ Try News
  const news = await client.fetch<NewsContentType | null>(NEWS_QUERY, { slug });

  if (news) return <NewsContent content={news} />;

  // 4️⃣ Nothing found
  return notFound();
}
