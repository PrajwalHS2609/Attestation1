import React from "react";
import "@/components/Blog/Blog.css";
import dummyImg from "@/media/images/attestationBanner.png";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  const blogPost = [
    {
      id: 1,
      img: dummyImg,
      title:
        "How to Choose the Right Agency for Embassy Attestation Services in Bangalore?",
      link: "/how-to-choose-the-right-agency-for-embassy-attestation-services-in-bangalore",
    },
    {
      id: 2,
      img: dummyImg,
      title: "Embassy Attestation vs. Apostille: What’s the Difference?",
      link: "/embassy-attestation-vs-apostille-whats-the-difference",
    },
  ];
  return (
    <div className="blogPost-container">
      <ul>
        <h2>Recent Posts</h2>
        {blogPost.map((x) => (
          <Link href={x.link} key={x.id}>
            <ul>
              <li>
                <Image src={x.img} alt={x.title} />
                <h4>{x.title}</h4>
              </li>
            </ul>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogPost;
