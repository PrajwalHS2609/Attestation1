import EmbassyAttestationVsApostilleHead from "@/components/Blog/BlogContentPages/EmbassyAttestationVsApostille/EmbassyAttestationVsApostilleHead";
import EmbassyAttestationVsApostilleWhat from "@/components/Blog/BlogContentPages/EmbassyAttestationVsApostille/EmbassyAttestationVsApostilleWhat";
import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";
import "@/components/Blog/Blog.css";
import EmbassyAttestationVsApostilleCommon from "@/components/Blog/BlogContentPages/EmbassyAttestationVsApostille/EmbassyAttestationVsApostilleCommon";
import EmbassyAttestationVsApostilleCan from "@/components/Blog/BlogContentPages/EmbassyAttestationVsApostille/EmbassyAttestationVsApostilleCan";
import EmbassyAttestationVsApostilleHow from "@/components/Blog/BlogContentPages/EmbassyAttestationVsApostille/EmbassyAttestationVsApostilleHow";
import EmbassyAttestationVsApostilleWhen from "@/components/Blog/BlogContentPages/EmbassyAttestationVsApostille/EmbassyAttestationVsApostilleWhen";
import EmbassyAttestationVsApostilleKey from "@/components/Blog/BlogContentPages/EmbassyAttestationVsApostille/EmbassyAttestationVsApostilleKey";

export default function EmbassyAttestationVsApostille() {
  return (
    <div className="blog-container">
      <div className="blog-wrapper1">
        <EmbassyAttestationVsApostilleHead />
        <EmbassyAttestationVsApostilleWhat />
        <EmbassyAttestationVsApostilleKey />
        <EmbassyAttestationVsApostilleWhen />
        <EmbassyAttestationVsApostilleHow />
        <EmbassyAttestationVsApostilleCommon />
        <EmbassyAttestationVsApostilleCan />
      </div>
      <div className="blog-wrapper2">
        <BlogSidebar />
      </div>
    </div>
  );
}
