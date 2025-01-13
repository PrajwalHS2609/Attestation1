import PccHead from "@/components/PccPage/PccHead";
import PccHeader from "@/components/PccPage/PccHeader";
import PccImp from "@/components/PccPage/PccImp/PccImp";

export default function Pcc() {
  return (
    <div className="main-container">
      <PccHeader />
      <PccHead />
      <PccImp/>
    </div>
  );
}
