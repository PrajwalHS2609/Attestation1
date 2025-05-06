"use client";
import "@/components/Blog/Blog.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import chooseRightBanner from "@/media/images/Blog/How to Choose the Right Agency for Embassy Attestation Services in Bangalore.png";
import attestationVsApostille from "@/media/images/Blog/Embassy Attestation vs. Apostille_ What’s the Difference.png";

import Image from "next/image";
const BlogMain = () => {
  const blogs = [
    {
      img: chooseRightBanner,
      head: "How to Choose the Right Agency for Embassy Attestation Services in Bangalore?",
      para: "When it comes to traveling abroad for education, employment, business, or ...",
      link: "/how-to-choose-the-right-agency-for-embassy-attestation-services-in-bangalore",
    },
    {
      img: attestationVsApostille,
      head: "Embassy Attestation vs. Apostille: What’s the Difference?",
      para: "When it comes to using documents internationally—whether for employment, education, business, or ...",
      link: "/embassy-attestation-vs-apostille-whats-the-difference", 
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of blogs per page

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the blogs for the current page
  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const preloadImages = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    blogs.slice(startIndex, endIndex).forEach((blog) => {
      const img = new window.Image();
      img.src = typeof blog.img === "string" ? blog.img : blog.img.src;
    });
  };

  useEffect(() => {
    preloadImages(currentPage);
  }, [currentPage]);
  return (
    <div className="blogMainContainer">
      <div className="blogMainContent" key={currentPage}>
        {currentBlogs.map((blog, index) => (
          <div className="blogCardContainer" key={index}>
            <div className="blogCardImg">
              <Image src={blog.img} alt={blog.head} loading="lazy" />
            </div>
            <div className="blogCardTitle">
              <h2>{blog.head}</h2>
            </div>
            <div className="blogCardPara">
              <p>{blog.para}</p>
            </div>
            <div className="BlogCardBut">
              <button>
                <Link href={blog.link}>Know More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pageButton ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogMain;
