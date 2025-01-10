import "./HomeService.css";
import HomeServiceHead from "./HomeServiceHead";
import HomeServiceMain from "./HomeServiceMain";

export default function HomeService() {
  return (
    <div className="homeService-container">
      <HomeServiceHead />
      <HomeServiceMain />
    </div>
  );
}
