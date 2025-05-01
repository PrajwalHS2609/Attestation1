import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";
import "@/components/Blog/Blog.css";
import ChooseRightAgencyHead from "@/components/Blog/BlogContentPages/ChooseRightAgency/ChooseRightAgencyHead";
import ChooseRightAgencyContent from "@/components/Blog/BlogContentPages/ChooseRightAgency/ChooseRightAgencyContent";

export default function ChooseRightAgency() {
  return (
    <div className="blog-container">
      <div className="blog-wrapper1">
        <ChooseRightAgencyHead />
        <ChooseRightAgencyContent />
      </div>
      <div className="blog-wrapper2">
        <BlogSidebar />
      </div>
    </div>
  );
}
