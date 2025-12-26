"use client";

import React from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import type { PortableTextBlock } from "@portabletext/types";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogAuthor from "./../Blog/BlogAuthor";
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type PostContentType = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
};
export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};
export default function PostContent({ content }: { content: PostContentType }) {
  const imageUrl = content?.mainImage?.asset?.url;
  return (
    <div className="blog-wrapper1">
      {imageUrl && (
        <Image src={imageUrl} alt={content.title} width={550} height={310} />
      )}
      <h1 className="">{content.title}</h1>
      {/* ✅ Carousel Section */}
      <div className="blogHead-content">
        <PortableText
          value={content.body}
          components={portableTextComponents}
        />
      </div>
      <BlogAuthor slug={content.slug.current} />
    </div>
  );
}
