"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import FaqComponent from "@/components/Faq/Faq";
import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";
import type { PortableTextBlock } from "@portabletext/types";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type PostContentType = {
  _id: string;
  title: string;
  slug: string;
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
  const youtubeUrl = content?.youtubeVideoUrl;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  return (
    <div className="blog-wrapper1">
      {imageUrl && (
        <Image src={imageUrl} alt={content.title} width={550} height={310} />
      )}
      <h1 className="blogHead-content">{content.title}</h1>
      {/* ✅ Carousel Section */}
      <div className="blogHead-content">
        <PortableText
          value={content.body}
          components={portableTextComponents}
        />
      </div>
    </div>
  );
}
