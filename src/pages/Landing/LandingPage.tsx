import { useNavigate } from "react-router";
import { Container } from "./LandingPage.styles";
import { NAV_PATHS } from "@constants";
import { drillbitsImg } from "@assets";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleQRScannerClick = () => {
    navigate(NAV_PATHS.QR_SCANNER);
  };

  return (
    <Container>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>QR Gauge</h1>
            <p>
              A react app that scans a QR code and redirect to a page depending
              on the code scanned.
            </p>
            <button onClick={handleQRScannerClick}>Open QR Scanner</button>
            <div className="drill-bits-container">
              <img alt="Drill Bits" src={drillbitsImg} />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LandingPage;
