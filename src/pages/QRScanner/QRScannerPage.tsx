import { useEffect } from "react";
import { Scanner, type IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { useNavigate, useSearchParams } from "react-router";
import { NAV_PATHS, QR_CODE, QR_CODES } from "@constants";
import { Container } from "./QRScannerPage.styles";

const QRScannerPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const handleScan = (code: IDetectedBarcode[]) => {
    if (code.length > 0) {
      const { rawValue } = code[0];
      if (QR_CODES.includes(rawValue))
        navigate(`${NAV_PATHS.QR_SCANNER}?code=${code[0].rawValue}`);
      else alert("Code not found.");
    }
  };

  useEffect(() => {
    if (code && QR_CODES.includes(code)) {
      switch (code) {
        case QR_CODE.INTERACTIVE_GAUGE:
          navigate(NAV_PATHS.INTERACTIVE_GAUGE);
          break;
        case QR_CODE.LANDING:
          navigate(NAV_PATHS.LANDING);
          break;
      }
    }
  }, [code, navigate]);

  return (
    <Container>
      <Scanner onScan={handleScan} />
      <div className="scan-helper-text">
        <p>Scan QR</p>
      </div>
    </Container>
  );
};

export default QRScannerPage;
