import React from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import FaqComponent from "@/components/Faq/Faq";
import type { PortableTextBlock } from "@portabletext/types";

export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type NewsContentType = {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
  author?: string;
  publishedAt?: string;
  mainImage?: { asset?: { url?: string } };
  faq?: FaqItem[];
};

export default function NewsContent({ content }: { content: NewsContentType }) {
  const imageUrl = content?.mainImage?.asset?.url;

  return (
    <div className="blog-container">
      <div className="blog-wrapper1">
        {imageUrl && (
          <Image src={imageUrl} alt={content.title} width={550} height={310} />
        )}
        <h1 className="blogHead-content">{content.title}</h1>

        <div className="blogHead-content">
          <PortableText
            value={content.body}
            components={portableTextComponents}
          />
        </div>

        {content.author && content.publishedAt && (
          <b className="published-date">
            Published on: {new Date(content.publishedAt).toLocaleDateString()}{" "}
            by {content.author}
          </b>
        )}

        {Array.isArray(content?.faq) && content.faq.length > 0 && (
          <FaqComponent faqs={content.faq} />
        )}
      </div>
    </div>
  );
}
