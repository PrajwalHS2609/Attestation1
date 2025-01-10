import "./HomeSeo.css";
import HomeSeoContent1 from "./HomeSeoContent1";
import HomeSeoContent2 from "./HomeSeoContent2";
import HomeSeoHead from "./HomeSeoHead";

export default function HomeSeo() {
  return (
    <div className="component-container">
      <HomeSeoHead />
      <HomeSeoContent1 />
      <HomeSeoContent2 />
    </div>
  );
}
