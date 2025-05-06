import React from "react";
import "@/components/Blog/Blog.css";
import chooseRightBanner from "@/media/images/Blog/How to Choose the Right Agency for Embassy Attestation Services in Bangalore.png";
import attestationVsApostille from "@/media/images/Blog/Embassy Attestation vs. Apostille_ What’s the Difference.png";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  const blogPost = [
    {
      id: 1,
      img: chooseRightBanner,
      title:
        "How to Choose the Right Agency for Embassy Attestation Services in Bangalore?",
      link: "/how-to-choose-the-right-agency-for-embassy-attestation-services-in-bangalore",
    },
    {
      id: 2,
      img: attestationVsApostille,
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
