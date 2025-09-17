import { useState, useEffect } from "react";
import { SocketWrench } from "@components";
import { addCircleIcn, replayIcn } from "@assets";
import { Container } from "./InteractiveGaugePage.styles";

const InteractiveGaugePage = () => {
  const [gauge, setGauge] = useState(0);
  const [hideButton, setHideButton] = useState(false);

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
      {gauge < 100 && (
        <div className="text-helper-wrapper">
          <p>Click Button Below To Increment Gauge</p>
        </div>
      )}
      {!hideButton && (
        <button
          onClick={gauge >= 100 ? handleResetGauge : handleIncrementGauge}
        >
          <img src={gauge >= 100 ? replayIcn : addCircleIcn} />
        </button>
      )}
    </Container>
  );
};

export default InteractiveGaugePage;
