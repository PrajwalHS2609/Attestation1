import Link from "next/link";
import React from "react";
import "@/components/Blog/Blog.css";

const BlogCategories = () => {
  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <li>
          <Link href={"/category/blog"}>All</Link>
        </li>
        <li>
          <Link href={"/category/attestation"}>Attestation</Link>
        </li>
        <li>
          <Link href={"/category/apostille"}>Apostille</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategories;
