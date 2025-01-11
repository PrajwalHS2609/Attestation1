import MofaCountries from "@/components/MofaPage/MofaCountries/MofaCountries";
import MofaHeader from "@/components/MofaPage/MofaHeader";

export default function Mofa(){
    return(
        <div className="main-container">
            <MofaHeader/>
            <MofaCountries/>
        </div>
    )
}