
import ApostilleCarousel from './ApostilleCarousel';
import AttestationCarousel from './AttestationCarousel';
import "./CountriesCarousel.css"
export default function CountriesCarousel() {
  return (
    <div className="countriesCarousel">
      <ApostilleCarousel />
      <AttestationCarousel/>
    </div>
  );
}
