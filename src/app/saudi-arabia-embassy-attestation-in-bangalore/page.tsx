import SaudiAttestationContent from "@/components/AttestationCountries/SaudiAttestation/SaudiAttestationContent";
import SaudiAttestationHead from "@/components/AttestationCountries/SaudiAttestation/SaudiAttestationHead";
import SaudiAttestationHeader from "@/components/AttestationCountries/SaudiAttestation/SaudiAttestationHeader";

export default function SaudiAttestation(){
    return(
        <div className="main-container">
            <SaudiAttestationHeader/>
            <SaudiAttestationHead/>
            <SaudiAttestationContent/>
        </div>
    )
}