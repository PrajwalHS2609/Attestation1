import VietnamAttestationContent from "@/components/AttestationCountries/VietnamAttestation/VietnamAttestationContent";
import VietnamAttestationHead from "@/components/AttestationCountries/VietnamAttestation/VietnamAttestationHead";
import VietnamAttestationHeader from "@/components/AttestationCountries/VietnamAttestation/VietnamAttestationHeader";

export default function VietnamAttestation(){
    return(
        <div className="main-container">
            <VietnamAttestationHeader/>
            <VietnamAttestationHead/>
            <VietnamAttestationContent/>
        </div>
    )
}