import { useMemo } from "react";
import { backgroundInteractiveImg } from "@assets";
import { Container } from "./SocketWrench.styles";

type Props = {
  value?: number;
};

const Component = ({ value = 0 }: Props) => {
  const getFill = useMemo(() => {
    const v = Math.min(Math.max(value, 0), 100);

    const red = Math.round((v / 100) * 255);
    const green = Math.round(((100 - v) / 100) * 255);
    const blue = 0;
    const opacity = 0.7 + (v / 100) * 0.3;

    return `rgba(${red}, ${green}, ${blue}, ${opacity.toFixed(2)})`;
  }, [value]);

  const { fillHeight, clipY } = useMemo(() => {
    const maxHeight = 532;
    const fillHeight = (value / 100) * maxHeight;
    const clipY = maxHeight - fillHeight;

    return { fillHeight, clipY };
  }, [value]);

  return (
    <Container>
      <div className="background-image">
        <img src={backgroundInteractiveImg} />
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 473 868"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(1.40461,0,0,1.04795,233.648,382.604)">
          <g id="socket-overlay.svg" transform="matrix(1,0,0,1,-35,-266)">
            <clipPath id="_clip1">
              <rect x="0" y={clipY} width="70" height={fillHeight} />
            </clipPath>
            <g clip-path="url(#_clip1)">
              <path
                d="M19.5,318.5L19.5,525C37.784,532.886 47.281,532.717 63,525L63,318.5L57,300L57,182L63,157L63,108L69.5,32C69.5,32 69.5,1 35,1C0.5,1 0.5,32 0.5,32L11,108L11,157L19.5,182L24.5,300L19.5,318.5Z"
                fill={getFill}
              />
            </g>
          </g>
          <g id="socket-overlay.svg1"></g>
        </g>
      </svg>
      <p className={`break ${value >= 100 ? "active" : ""}`}>BREAK</p>
    </Container>
  );
};

export default Component;
