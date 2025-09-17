import { useState, useEffect } from "react";
import { SocketWrench } from "@components";
import { addCircleIcn, replayIcn } from "@assets";
import { Container } from "./InteractiveGaugePage.styles";

const InteractiveGaugePage = () => {
  const [gauge, setGauge] = useState<number>(0);
  const [hideButton, setHideButton] = useState<boolean>(false);

  const isGaugeMax = gauge >= 100;

  const handleIncrementGauge = () => {
    setGauge((p) => p + 1);
  };

  const handleResetGauge = () => {
    setGauge(0);
  };

  useEffect(() => {
    if (gauge >= 100) {
      setHideButton(true);

      setTimeout(() => {
        setHideButton(false);
      }, 3000);
    }
  }, [gauge]);

  return (
    <Container>
      <SocketWrench value={gauge} />
      {!isGaugeMax && (
        <div className="text-helper-wrapper">
          <p>Click Button Below To Increment Gauge</p>
        </div>
      )}
      {!hideButton && (
        <button onClick={isGaugeMax ? handleResetGauge : handleIncrementGauge}>
          <img src={isGaugeMax ? replayIcn : addCircleIcn} />
        </button>
      )}
    </Container>
  );
};

export default InteractiveGaugePage;
