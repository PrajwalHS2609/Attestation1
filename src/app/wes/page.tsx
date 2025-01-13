import WesDoc from "@/components/Wespage/WesDoc";
import WesHead from "@/components/Wespage/WesHead";
import WesHeader from "@/components/Wespage/WesHeader";
import WesProcess from "@/components/Wespage/WesProcess";

export default function WesPage() {
  return (
    <div className="main-container">
      <WesHeader />
      <WesHead />
      <WesDoc />
      <WesProcess />
    </div>
  );
}
