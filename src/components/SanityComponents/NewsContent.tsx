"use client"
import React, { useState } from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import FaqComponent from "@/components/Faq/Faq";
import type { PortableTextBlock } from "@portabletext/types";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
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
export default function NewsContent({ content }: { content: NewsContentType }) {
  const imageUrl = content?.mainImage?.asset?.url;
 const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  return (
    <div className="blog-container">
      <div className="blog-wrapper1">
        {imageUrl && (
          <Image src={imageUrl} alt={content.title} width={550} height={310} />
        )}
        <h1 className="blogHead-content">{content.title}</h1>
{/* ✅ Carousel Section */}
        {content.carouselBlock?.images?.length ? (
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="carouselContainer"
          >
            {content.carouselBlock.images.map((img, i) => (
              <Carousel.Item key={i} className="carouselItem">
                {img.link ? (
                  <a href={img.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={img.asset?.url}
                      alt={img.alt || `Slide ${i + 1}`}
                      className="d-block w-100 rounded"
                    />
                  </a>
                ) : (
                  <img
                    src={img.asset?.url}
                    alt={img.alt || `Slide ${i + 1}`}
                    className="d-block w-100 rounded"
                  />
                )}
                {img.caption && (
                  <Carousel.Caption>
                    <h3>{img.caption}</h3>
                  </Carousel.Caption>
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        ) : null}
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
